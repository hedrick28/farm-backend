import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import logo from "./wheat_PNG47.png";
import welcomeimg from "./welcome.jpg";

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 7) {
      errors.password = "Password must be more than 7 characters";
    }
    return errors;
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
              name="username"
              id="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p id="errorid">{formErrors.username}</p>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p id="errorid">{formErrors.password}</p>
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
