import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import logo from "./wheat_PNG47.png";
import welcomeimg from "./welcome.jpg";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import Joi from "joi";

function Login() {
  const [formValues, setFormValues] = useState({ userName: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formValues));
  };

  const schema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    const { error } = schema
      .extract(e.currentTarget.name)
      .label(e.currentTarget.name)
      .validate(e.currentTarget.value);
    if (error) {
      setFormErrors({
        ...formErrors,
        [e.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete formErrors[e.currentTarget.name];
      setFormErrors(formErrors);
    }
  };

  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <div className="img-class">
            <img src={logo} alt="" id="img-id"></img>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              placeholder="Username"
              type="text"
              name="userName"
              id="userName"
              value={formValues.userName}
              onChange={handleChange}
            />
            {formErrors.userName && (
              <div className="text-danger">Username is required.</div>
            )}
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <div className="text-danger">Password is required</div>
            )}
            <button type="submit" id="sub_butt">
              Submit
            </button>
          </form>
          <div className="footer">
            <h4>
              <Link className="link" to="/ForgotPassword">
                Forgot Password?
              </Link>
            </h4>
          </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back!</h3>
          </div>
          <div className="welcomeimg">
            <img src={welcomeimg} alt="" id="wel-img-id" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
