import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/auth";
import Joi from "joi";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    mobileNumber: "",
    email: "",
    userName: "",
    password: "",
    role: "",
  });

  const schema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
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
    email: Joi.string()
      .allow("")
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .optional(),
    userName: Joi.string().alphanum().min(7).max(25).trim(true).required(),
    password: Joi.string()
      .min(7)
      .max(30)
      .pattern(/[a-zA-Z0-9]/)
      .required(),
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(form));
    navigate("/login");
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <div className="container mb-5 d-flex justify-content-center reg-border">
      <form
        className="row g-3 needs-validation"
        onSubmit={handleSubmit}
        method="post"
      >
        <h3 className="d-flex justify-content-center mt-4">
          Gumawa ng Account
        </h3>
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
            placeholder="Jose"
          />
          {errors.firstName && (
            <div className="text-danger">Maglagay ng unang pangalan.</div>
          )}
        </div>
        <div className="col-md-4">
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
            placeholder="Rizal"
          />
          {errors.lastName && (
            <div className="text-danger">Maglagay ng apelyido.</div>
          )}
        </div>
        <div className="col-md-4">
          <label htmlFor="birthDate" className="form-label">
            Kapanganakan
          </label>
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
                placeholder="09163412345"
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
              id="email"
              name="email"
              value={form.emailAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-6">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={form.userName}
              onChange={handleChange}
              placeholder="jRizal1234"
            />
            {errors.userName && (
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
              placeholder="makaBayan77"
            />
            {errors.password && (
              <div className="text-danger">
                Maglagay ng password. 7 ang pinakamababang kumbinasyon ng numero
                at alpabeto ang pwedeng gamitin.
              </div>
            )}
          </div>
        </div>
        <div className="col-12">Sumali bilang isang (Pumili ng isa) : </div>

        <div className="row d-flex">
          <div className="form-check col-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="farmer"
              value="magsasaka"
              onChange={handleChange}
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
              value="admin"
              onChange={handleChange}
            />

            <label className="form-check-label" htmlFor="admin">
              Administrador
            </label>
          </div>
          {errors.role && <div className="text-danger">Pumili ng isa.</div>}
        </div>

        <div className="col-12 md-10 row d-flex justify-content-center align-content-center">
          <button
            className="btn btn-f-primary w-50 mt-3 "
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
