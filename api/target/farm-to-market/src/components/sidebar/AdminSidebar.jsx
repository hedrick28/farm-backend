import {
  faBars,
  faDashboard,
  faUser,
  faUserAlt,
  faUsers,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="wrapper">
      <div className="section">
        <div className="top_navbar">
          <div className="hamburger d-flex justify-content-center">
            <Link onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <FontAwesomeIcon icon={faX} size="1x" />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className={`${toggle ? "toggle-sidebar" : ""} sidebar`}>
        <ul>
          <li>
            <Link to="/admin/dashboard" className="active">
              <span className="icon">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                My Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Suppliers
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <FontAwesomeIcon icon={faUserAlt} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Retailers
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <i className="fas fa-database"></i>
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Development
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Reports
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <i className="fas fa-user-shield"></i>
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>Admin</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
