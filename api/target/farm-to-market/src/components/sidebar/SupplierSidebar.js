import {
  faBars,
  faCartPlus,
  faCommentAlt,
  faDashboard,
  faWheatAwn,
  faX,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SupplierSidebar = () => {
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
            <Link to="/dashboard">
              <span className="icon">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Advertisements
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <FontAwesomeIcon icon={faWheatAwn} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                My products
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="icon">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
              <span className={`${toggle ? "show-item" : ""} item`}>
                Orders
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupplierSidebar;
