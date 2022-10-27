import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faSearch,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { getUserInfo } from "../../services/userInf";
import { useState } from "react";
const Header = () => {
  const [userInfo, setUserInfo] = useState(getUserInfo());
  console.log(userInfo, "the info");
  return (
    <nav className="navbar f-bg-primary navbar-expand-lg navbar-light">
      <div className="container">
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
            {!userInfo && (
              <>
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
              </>
            )}
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="header-profile"
                >
                  Jovanie
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/dashboard">
                    <FontAwesomeIcon
                      icon={faDashboard}
                      className="f-text-color"
                    />
                    <span className="ms-2">Dashboard</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/profile">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className="f-text-color"
                    />
                    <span className="ms-2">Profile</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
