import React, { useState } from "react";
import "./Profile.scss";

const Profile = () => {
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
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="layout-container-page">
        <div className="layout-page"></div>
        <form>
          <div className="content-wrapper">
            <div
              className="container-xxl flex-grow-1 container-p-y"
              id="profile"
            >
              <h4 className="fw-bold py-3 mb-4">User's Profile</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-4">
                    <h5 className="card-header">Profile Details</h5>
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src=""
                          alt="farmer-avatar"
                          className="d-block rounded"
                          id="uploadedAvatar"
                          width={"200px"}
                          height={"150px"}
                        />
                        <div className="button-wrapper">
                          <div className="d-flex flex-row justify-content-center align-items-center">
                            <label
                              htmlFor="upload"
                              className="btn us-btn-primary me-2 mb-4"
                              tabIndex="0"
                              typeof="file"
                            >
                              <span className="d-none d-sm-block">
                                Upload new photo
                              </span>
                              <i className="bx bx-upload d-block d-sm-none"></i>
                              {/* <input
                                type="file"
                                id="upload"
                                accept="image/png, image/jpeg"
                                className="account-file-input"
                              /> */}
                            </label>
                            <button className="btn us-btn-secondary account-image-reset mb-4">
                              <i className="bx bx-reset d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Save</span>
                            </button>
                          </div>
                          <p className="text-mute mb-0">
                            Allowed JPG, JPEG or PNG. Max size of 1MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body info-group">
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled={true}
                            id="firstName"
                            name="firstName"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled={true}
                            id="lastName"
                            name="lastName"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="mobileNumber" className="form-label">
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            disabled={true}
                            id="mobileNumber"
                            name="mobileNumber"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <h5 className="card-header">More Info</h5>
                    <div className="card-body adress-group">
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="gender" className="form-label">
                            Gender
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="gender"
                            name="gender"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="birthDate" className="form-label">
                            Birthdate
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="birthDate"
                            name="birthDate"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
