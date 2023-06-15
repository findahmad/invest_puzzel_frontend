import React, { useRef, useState } from "react";
import Message from "../../components/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const ChangeSettings = () => {
  const navigate = useNavigate();

  let [message, setMessage] = useState();
  let [showPassword, setShowPassword] = useState(null);
  let [loading, setLoading] = useState(false);
  let [option, setOption] = useState(null);

  const jwtbyLogin = localStorage.getItem("jwtbyLogin");
  let PasswordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    let password = PasswordRef.current.value;

    if (!password) {
      window.scrollTo(0, 0);
      setMessage("Enter Password to validate your account.");
    } else if (password) {
      try {
        setLoading(true);
        let res = await fetch(
          process.env.REACT_APP_BASE_URL +
            `/users/confirmpasswordforprofileupdate`,
          {
            method: "POST",
            body: JSON.stringify({
              password: password,
            }),
            headers: {
              Authorization: `Bearer ${jwtbyLogin}`,
              "Content-type": "application/json",
            },
          }
        );

        let data = await res.json();
        console.log(data);
        setLoading(false);
        if (res.status !== 200) {
          window.scrollTo(0, 0);
          setLoading(false);

          setMessage(data.message);
        } else {
          setLoading(false);

          if (data.isPasswordCorrect === false) {
            window.scrollTo(0, 0);
            setMessage("Password is not matched.");
          } else if (option === "username") {
            navigate("/changeUsername");
            window.scrollTo(0, 0);
          } else if (option === "email") {
            navigate("/changeEmail");
            window.scrollTo(0, 0);
          } else if (option === "password") {
            navigate("/changePassword");
            window.scrollTo(0, 0);
          } else if (option === "fullName") {
            navigate("/changeFullName");
            window.scrollTo(0, 0);
          } else {
            window.scrollTo(0, 0);
            setMessage("Select an option.");
          }
        }
      } catch (err) {
        console.log(err);
        setLoading(false);

        setMessage(
          "Problem with validating password, contact Customer Support."
        );
      }
    }
  };

  return (
    <>
      <div className="container-fluid px-3 px-md-5 py-4 py-md-5">
        <div className="px-md-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(-1);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="./images/back arrow.png"
                  alt="back"
                  className="pe-3 mt-1"
                />
              </div>
              <h1 className="text-color fs-3 fw-bold ">Profile Settings</h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <h1 className="fs-5 fw-bold home-desc">
                Change username/email/password
              </h1>
              <p className="home-desc py-1">
                For security write your current password to validate.
              </p>

              <div className="row pt-3 pb-md-3">
                <form method="post" onSubmit={submitHandler} id="formId">
                  {message ? (
                    <div className="mb-5">
                      <Message>{message}</Message>
                    </div>
                  ) : null}
                  {loading ? <Loader>{loading}</Loader> : null}
                  <div className="col-12 col-lg-6">
                    <div className="mb-3 position-relative">
                      <label className="font2 fw-bold form-label">
                        Password
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        ref={PasswordRef}
                        className="form-cells1 mb-5 form-control"
                        placeholder="Type your password"
                      />
                      <div
                        className="position-absolute top-50 end-0 pe-4 pt-1 showpass"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <p className="home-desc fs-6">
                          Please select which information do you want to change
                          it:
                        </p>
                      </div>

                      <div className="col-12">
                        <div className="form-check my-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="change"
                            id="username"
                            onChange={(e) => setOption(e.target.value)}
                            value="username"
                          />
                          <label
                            className="form-check-label fs-6 fw-bold"
                            for="username"
                          >
                            Change Username
                          </label>
                        </div>
                        <div className="form-check my-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="change"
                            id="email"
                            onChange={(e) => setOption(e.target.value)}
                            value="email"
                          />
                          <label
                            className="form-check-label fs-6 fw-bold"
                            for="email"
                          >
                            Change Email
                          </label>
                        </div>
                        <div className="form-check my-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="change"
                            id="password"
                            onChange={(e) => setOption(e.target.value)}
                            value="password"
                          />
                          <label
                            className="form-check-label fs-6 fw-bold"
                            for="password"
                          >
                            Change Password
                          </label>
                        </div>
                        <div className="form-check my-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="change"
                            id="fullName"
                            onChange={(e) => setOption(e.target.value)}
                            value="fullName"
                          />
                          <label
                            className="form-check-label fs-6 fw-bold"
                            for="fullName"
                          >
                            Change Full Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn signUp-button text-light fw-bold"
                            type="submit"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeSettings;
