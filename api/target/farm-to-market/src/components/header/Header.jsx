import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <nav className="navbar f-bg-primary navbar-expand-lg navbar-light">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="">
          <img className="logo" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <form className="d-flex w-100 align-self-center mt-2">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search product"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text btn-f-primary"
                id="basic-addon2"
              >
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </form>
          <ul className="navbar-nav w-100 justify-content-end">
            <li className="nav-item nav-router-link">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item nav-router-link">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
