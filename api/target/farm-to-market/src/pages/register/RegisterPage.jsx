import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    mobileNumber: "",
    emailAddress: "",
    username: "",
    password: "",
    role: "",
  });

  const schema = Joi.object({
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
    mobileNumber: Joi.string()
      .length(11)
      .pattern(/[0]{1}[9]{1}[0-9]{9}/)
      .required(),
    emailAddress: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .optional(),
    emailAddress: Joi.string().optional(),
    username: Joi.string().alphanum().min(3).max(25).trim(true).required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });

    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);
    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
      setErrors(errors);
    }
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       await authService.register(form.username, form.password);
  //       alert("Successfully registered!");
  //       navigate("/login");
  //     } catch (error) {
  //       if (error.response && error.response.data.statusCode === 400) {
  //         alert(error.response.data.message[0]);
  //       }
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    console.log("Registered successfully");
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    console.log(result);
    return !!result.error;
  };

  return (
    <div className="container d-flex justify-content-center">
      <form className="row g-3 needs-validation">
        <h3>Gumawa ng account</h3>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            Unang Pangalan
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <div className="text-danger">Maglagay ng unang pangalan.</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Apelyido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <div className="text-danger">Maglagay ng apelyido.</div>
          )}
        </div>
        <div className="row g-3">
          <div className="col-12">Kapanganakan</div>
          <input
            type="date"
            className="form-control"
            id="birthDate"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && (
            <div className="text-danger">
              Maglagay ng kaarawan. Siguraduhin na ikaw ay nasa hustong edad
              para gumawa ng account.
            </div>
          )}
        </div>
        <div className="row g-2">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="mobileNumber" className="form-label">
                Numero ng cellphone
              </label>
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && (
                <div className="text-danger">
                  Maglagay ng numero ng cellphone.
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="emailAddress" className="form-label">
              Email Address (opsyonal)
            </label>
            <input
              type="text"
              className="form-control"
              id="emailAddress"
              name="emailAddress"
              value={form.emailAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="text-danger">Maglagay ng username.</div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-danger">Maglagay ng password.</div>
            )}
          </div>
        </div>
        <div className="col-12">Sumali bilang isang (Pumili ng isa) : </div>

        <div className="row">
          <div className="form-check col-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="farmer"
              value="magsasaka"
              onChange={handleChange}
              checked={form.role === "magsasaka"}
            />

            <label className="form-check-label" htmlFor="farmer">
              Magsasaka
            </label>
          </div>
          <div className="form-check col-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="supplier"
              value="supplier"
              onChange={handleChange}
              checked={form.role === "suplayer"}
            />

            <label className="form-check-label" htmlFor="supplier">
              Suplayer
            </label>
          </div>
          <div className="form-check col-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="admin"
              value="administrador"
              onChange={handleChange}
              checked={form.role === "admin"}
            />

            <label className="form-check-label" htmlFor="admin">
              Administrador
            </label>
          </div>
          {errors.role && <div className="text-danger">Pumili ng isa.</div>}
        </div>

        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isFormInvalid()}
          >
            Isumite
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
