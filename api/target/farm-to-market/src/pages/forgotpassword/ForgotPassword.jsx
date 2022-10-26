import React from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import logo from "./ForgotPassword.png";

const ForgotPassword = () => {
  return (
    <div className="main-Fpassword">
      <div className="left-side"></div>
      <div className="header">
        <img src={logo} id="" alt="" />
      </div>
      <div className="right-side"></div>
      ForgotPassword
      <Link className="link" to="/">
        Back to login
      </Link>
    </div>
  );
};

export default ForgotPassword;
