import React, { useState } from "react";
import "./profile.scss";
import { getUserInfo } from "../../services/userInf";
import { Card, Container, Form, Row, Col } from "react-bootstrap";
import Joi from "joi";
import lodash from "../../services/lodash";
import { updateProfile, upload } from "../../services/user";
import { toast } from "react-toastify";
import { numberOnlyInput } from "../../services/inputService";

const Profile = () => {
  const {
    firstName,
    lastName,
    mobile,
    email,
    user_id,
    birthDate,
    gender,
    profile,
  } = getUserInfo().data;
  const [userInfo, setUserInfo] = useState({
    firstName,
    lastName,
    mobile,
    user_id,
    birthDate,
    gender,
    email,
  });
  const [newAddress, setAddress] = useState(
    getUserInfo().data.address.length > 0
      ? getUserInfo().data.address[0]
      : {
          province: "",
          city: "",
          barangay: "",
          street: "",
          houseNo: "",
        }
  );
  const [errors, setErrors] = useState({});
  const [imageData, setImageData] = useState(null);
  const [imagePrev, setImagePrev] = useState(
    profile ? require(`../../assets/uploads/${profile}`) : null
  );

  const userInfoSchema = Joi.object({
    user_id: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthDate: Joi.string()
      .allow("")
      .required()
      .optional()
      .custom((value, helper) => {
        var dob = new Date(value.split(" ")[0]);
        var dateNow = new Date();
        if (dateNow.getFullYear() - dob.getFullYear() < 15) {
          return helper.message(
            "Invalid birth date, age must be greater than or equal to 15"
          );
        } else {
          return true;
        }
      }),
    mobile: Joi.string().required(),
    gender: Joi.string().required(),
    email: Joi.string().required(),
    profile: Joi.string().optional(),
  });

  const userAddressSchema = Joi.object({
    province: Joi.string().required(),
    city: Joi.string().required(),
    barangay: Joi.string().required(),
    street: Joi.string().required(),
    houseNo: Joi.string().required(),
  });

  const handleChange = (e, type = "input") => {
    if (type === "input") {
      e.preventDefault();
    }
    setUserInfo({ ...userInfo, [e.currentTarget.name]: e.currentTarget.value });

    const { error } = userInfoSchema
      .extract(e.currentTarget.name)
      .label(lodash(e.currentTarget.name))
      .validate(e.currentTarget.value);
    if (error) {
      setErrors({
        ...errors,
        [e.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[e.currentTarget.name];
      setErrors(errors);
    }
  };

  const handleChangeAddress = (e) => {
    e.preventDefault();
    setAddress({
      ...newAddress,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    const { error } = userAddressSchema
      .extract(e.currentTarget.name)
      .label(lodash(e.currentTarget.name))
      .validate(e.currentTarget.value);
    if (error) {
      setErrors({
        ...errors,
        [e.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[e.currentTarget.name];
      setErrors(errors);
    }
  };
  const isFormValid = () => {
    const userInfoResult = userInfoSchema.validate(userInfo);
    const userAddressResult = userAddressSchema.validate(newAddress);

    return !!userInfoResult.error || !!userAddressResult.error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...userInfo,
      address: [{ ...newAddress }],
    };

    if (imageData && imageData.entries().next().value[1] !== null) {
      upload(imageData).then((res) => {
        if (res.data && res.data.status === 1) {
          update(data);
        }
      });
    } else {
      update(data);
    }
  };

  const update = (data) => {
    updateProfile(data).then((res) => {
      if (res.data && res.data.status === 1) {
        localStorage.setItem("ftm", JSON.stringify(res.data));
        toast.success(res.data.message);
      }
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    var imageData1 = new FormData();
    imageData1.append("imageFile", file);
    setImageData(imageData1);
    setImagePrev(URL.createObjectURL(file));
    setUserInfo({ ...userInfo, [e.currentTarget.name]: file.name });
  };

  return (
    <Container className="mb-4 mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={10}>
            <Card>
              <Card.Header>
                <Card.Title>User Information</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={6} className="mb-3">
                    <div className="d-flex align-items-start justify-content-center align-items-sm-center gap-4">
                      <img
                        src={
                          imagePrev
                            ? imagePrev
                            : require("../../assets/uploads/empty.jpg")
                        }
                        alt="profile"
                        className="profilePicture"
                        id="uploadedAvatar"
                        width={"200px"}
                        height={"150px"}
                      />
                    </div>
                  </Col>
                  <Col
                    lg={6}
                    className=" d-flex justify-content-center align-items-center "
                  >
                    <div className="button-wrapper">
                      <div className="d-flex flex-row justify-content-center align-items-center ">
                        <label
                          htmlFor="upload"
                          className="btn input-f-primary"
                          tabIndex="0"
                          typeof="file"
                        >
                          <input
                            name="profile"
                            accept="image/*"
                            type="file"
                            id="upload"
                            className="account-file-input input-file-upload"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="text-mute mb-0">
                        Allowed JPG, JPEG or PNG. Max size of 1MB
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        name="firstName"
                        onChange={handleChange}
                        value={userInfo.firstName}
                      ></Form.Control>
                      {!!errors.firstName && (
                        <span className="text-danger">{errors.firstName}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={handleChange}
                      ></Form.Control>
                      {!!errors.lastName && (
                        <span className="text-danger">{errors.lastName}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Birth Date</Form.Label>
                      <Form.Control
                        name="birthDate"
                        type="date"
                        onChange={handleChange}
                        value={userInfo.birthDate}
                      ></Form.Control>
                      {!!errors.birthDate && (
                        <span className="text-danger">{errors.birthDate}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        name="mobile"
                        value={userInfo.mobile ? userInfo.mobile : ""}
                        onChange={handleChange}
                        onKeyPress={(e) => numberOnlyInput(e, 11)}
                      ></Form.Control>
                      {!!errors.mobile && (
                        <span className="text-danger">{errors.mobile}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Gender</Form.Label>
                      <Row>
                        <Col lg={6}>
                          <Form.Check
                            checked={userInfo.gender === "Male" ? true : false}
                            onChange={(e) => handleChange(e, "radio")}
                            name="gender"
                            value="Male"
                            type="radio"
                            label="Male"
                          />
                        </Col>
                        <Col lg={6}>
                          <Form.Check
                            name="gender"
                            checked={
                              userInfo.gender === "Female" ? true : false
                            }
                            onChange={(e) => handleChange(e, "radio")}
                            value="Female"
                            type="radio"
                            label="Female"
                          />
                        </Col>
                      </Row>
                      {!!errors.gender && (
                        <span className="text-danger">{errors.gender}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={userInfo.email}
                      ></Form.Control>
                      {!!errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Header>
                <Card.Title>Address</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Province</Form.Label>
                      <Form.Control
                        name="province"
                        onChange={handleChangeAddress}
                        value={newAddress.province}
                      />
                      {!!errors.province && (
                        <span className="text-danger">{errors.province}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>City / Municipality</Form.Label>
                      <Form.Control
                        name="city"
                        onChange={handleChangeAddress}
                        value={newAddress.city}
                      />
                      {!!errors.city && (
                        <span className="text-danger">{errors.city}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Barangay</Form.Label>
                      <Form.Control
                        name="barangay"
                        onChange={handleChangeAddress}
                        value={newAddress.barangay}
                      />
                      {!!errors.barangay && (
                        <span className="text-danger">{errors.barangay}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Street</Form.Label>
                      <Form.Control
                        name="street"
                        onChange={handleChangeAddress}
                        value={newAddress.street}
                      />
                      {!!errors.street && (
                        <span className="text-danger">{errors.street}</span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>House Number</Form.Label>
                      <Form.Control
                        name="houseNo"
                        onChange={handleChangeAddress}
                        value={newAddress.houseNo}
                      />
                      {!!errors.houseNo && (
                        <span className="text-danger">{errors.houseNo}</span>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <div className="mt-3 d-flex justify-content-end">
              <button
                disabled={isFormValid()}
                type="submit"
                className="btn btn-f-primary"
              >
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Profile;
