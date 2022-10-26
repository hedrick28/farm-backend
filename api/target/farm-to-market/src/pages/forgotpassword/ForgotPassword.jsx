import React from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <div className="main-Fpassword">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="top-right">
          <Link id="Links-signin" className="link" to="/">
            Back to login
          </Link>
        </div>
        <div className="body-right">
          <div className="container">
            <h1>Forgot Password</h1>
            <div className="input-group">
              <h5>Mobile Number</h5>
              <input type="text" className="text" name="mnumber" id="mnumber" />
            </div>
            <div className="input-group">
              <h5>Secret Question</h5>
              <input
                type="text"
                className="text"
                name="squestion"
                id="squestion"
              />
            </div>
            <div className="input-group">
              <h5>Answer</h5>
              <input type="text" className="text" name="answer" id="answer" />
            </div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ForgotPassword;
