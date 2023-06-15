import React, { useEffect, useRef, useState } from "react";
import Message from "../../components/Message";

import { useNavigate } from "react-router-dom";
const ProfileSettings = () => {
  // let [usernametemp, setusernametemp] = useState("");
  let [message, setMessage] = useState("");





  const userEmail = localStorage.getItem('userEmail')
  const username = localStorage.getItem('username')



  const navigate = useNavigate();
  let isLoggedIn = Number(
    localStorage.getItem("isLoggedIn") != undefined
      ? localStorage.getItem("isLoggedIn")
      : 0
  );

  if (isLoggedIn == 0) {
    navigate("/signin");
    window.scrollTo(0, 0);
  } else
    return (
      <>
        <div className="container-fluid px-3 px-md-5 py-4 py-md-5">
          <div className="px-md-5">
            <div className="row">
              <div className="col-12">
                <h1 className="text-color fs-3 fw-bold ">Profile Settings</h1>
                <h1 className="home-desc fs-4 fw-bold py-4">Active Users</h1>
              </div>
            </div>
            <div className="row">
              <div className="d-flex mb-md-5">
                <div>
                  <img
                    src="./images/profile 1.png"
                    alt="profile image"
                    className="img-fluid profile-img"
                  />
                </div>
                <div className="align-items-center d-flex mx-lg-5 mx-md-3 px-md-3 px-4 upload">
                  <button className="btn signUp-button text-light fw-bold px-2 pe-md-3 ps-lg-2 pe-lg-4 btn-warning1">
                    <img src="./images/Vector.svg" className="px-md-2 px-1" />
                    Upload
                    <input type="file" />
                  </button>

                  <p className="home-desc mx-5 mb-0 d-none d-md-block">
                    You can upload images up to 256x256.
                  </p>
                </div>
              </div>


              <div className="row">
                <div className="col-12 d-md-none home-desc text-center py-4">
                  You can upload images up to 256x256.
                </div>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-12">
                <h1 className="home-desc fs-4 fw-bold pt-4 py-5">
                  Account Info
                </h1>
              </div>
              <div className="col-12">
                <form method="post" className="mb-5">
                  {message ? (
                    <div className="mb-5">
                      <Message>{message}</Message>
                    </div>
                  ) : null}
                  <div className="row">
                  <div className="col-sm-12 col-md-6">
                      <div className="mb-3">
                        <label className="font2 form-label">Username</label>
                        <input
                          type="text"
                          // ref={UsernameRef}
                          className="form-cells1 mb-5 form-control"
                          placeholder="Charlieb"
                          value={username}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="mb-3">
                        <label className="font2 form-label">
                          University Email
                        </label>
                        <input
                          type="email"
                          placeholder="yourmail@schooldomain.com"
                          // ref={EmailRef}
                          className="form-cells1 mb-5 form-control"
                          // onChange={(e) => {
                          //   let unTemp = e.target.value.split("@")[0];
                          //   setusernametemp(unTemp);
                          // }}
                          value={userEmail}
                        />
                      </div>
                    </div>
                    
                  </div>
                  {/* <button
                    className="btn signUp-button text-light px-5 mb-3 fw-bold"
                    type="submit"
                  >
                    Save
                  </button> */}
                </form>
                <hr />
              </div>
              <div className="col-12 d-flex align-items-center">
                <p className="home-desc py-5 fw-bold fs-5">
                  Change username/email/password
                </p>
                <div
                  className="ms-auto"
                  style={{ cursor: "pointer" }}
                  onClick={() => {navigate("/changeSettings"); window.scrollTo(0,0)}}
                >
                  <img
                    src="./images/next arrow.png"
                    alt="next"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ProfileSettings;
