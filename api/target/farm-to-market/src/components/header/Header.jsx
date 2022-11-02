import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDashboard,
  faLightbulb,
  faMessage,
  faRightFromBracket,
  faSearch,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { getUserInfo } from "../../services/userInf";
import { getNotif, seenTip } from "../../services/notif";
import { useState } from "react";
import { Card } from "react-bootstrap";
import TipModal from "../modals/TipModal";
import { useDispatch } from "react-redux";
import { tipModal } from "../../redux/actions/tipModal";
import { deleteTip } from "../../redux/actions/tip";
const Header = () => {
  const [notif, setNotif] = useState(null);
  const [tipModalContent, setTipModalContent] = useState(null);
  const userInfo = getUserInfo();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("ftm");
    navigate("/");
  };

  useEffect(() => {
    if (getUserInfo()) {
      getNotif(getUserInfo().data.user_id).then((res) => {
        if (res.data && res.data.status === 1) {
          setNotif({ ...res.data });
        }
      });
    }
  }, []);

  const handleTipOnClick = (data) => {
    seenTip(data.tip_id).then((res) => {
      if (res.data && res.data.status === 1) {
        dispatch(tipModal(true));
        setTipModalContent(data);
      }
    });
  };

  const handleDeleteTip = (id, data) => {
    dispatch(deleteTip(id, data));
  };

  return (
    <nav className="navbar f-bg-primary navbar-expand-lg navbar-light">
      {tipModalContent && (
        <TipModal content={tipModalContent} onDelete={handleDeleteTip} />
      )}

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
            {userInfo && (
              <>
                <li className="d-flex justify-content-center align-items-center me-4">
                  <Link className="badge">
                    <FontAwesomeIcon icon={faBell} color="#30830c" size="2x" />
                    <span className="badge bg-danger">1</span>
                  </Link>
                </li>
                <li className="d-flex justify-content-center align-items-center me-4">
                  <Link className="badge">
                    <FontAwesomeIcon
                      icon={faMessage}
                      color="#30830c"
                      size="2x"
                    />
                    <span className="badge bg-danger">1</span>
                  </Link>
                </li>

                {notif && (
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle className="header-profile notif-dropdown">
                        <Link className="badge">
                          <FontAwesomeIcon
                            icon={faLightbulb}
                            size="2x"
                            color="#30830c"
                          />
                          {notif && notif.tipSize > 0 && (
                            <span className="badge bg-danger">
                              {notif && notif.tipSize}
                            </span>
                          )}
                        </Link>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="notif">
                        {notif &&
                          notif.tips.map((tip, idx) => (
                            <Dropdown.Item
                              className="notif-item"
                              key={idx}
                              onClick={() => handleTipOnClick(tip)}
                            >
                              <div
                                className={`${
                                  !tip.seen ? "fw-bold" : ""
                                } notif-content`}
                              >
                                <div>{tip.title}</div>
                                <p>{tip.content}</p>
                              </div>
                            </Dropdown.Item>
                          ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                )}
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="header-profile"
                    >
                      {userInfo && userInfo.data.firstName.toUpperCase()}
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
                      <Dropdown.Item onClick={handleLogout}>
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="f-text-color"
                        />
                        <span className="ms-2">Logout</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
