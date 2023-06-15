import React, { useState, useRef } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Message from "../../components/Message";
import SuccessCard from "../../components/SuccessCard";
import Loader from "../../components/Loader";

const NewPassword = () => {
  let Passwordref = useRef();
  let ConfirmPasswordref = useRef();

  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(null);
  const [show, setShow] = useState(false);
  let [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    let password = Passwordref.current.value;
    let confirmPassword = ConfirmPasswordref.current.value;
    let email = localStorage.getItem("recoveryEmail");
    let code = localStorage.getItem("codebyPasswordOtp");

    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setLoading(false);
        setMessage("Password not match.");
      } else {
        try {
          setLoading(true);
          let res = await fetch(
            process.env.REACT_APP_BASE_URL + "/auth/resetPassword",
            {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password,
                code: code,
                type: "1",
              }),
              headers: {
                // Authorization: `Bearer ${}`,
                "Content-type": "application/json",
              },
            }
          );
          let data = await res.json();
          if (res.status !== 200) {
            window.scrollTo(0, 0);
            setLoading(false);
            setMessage(
              data.message.charAt(0).toUpperCase() + data.message.slice(1)
            );
          } else {
            setLoading(false);
            handleShow();
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
          window.scrollTo(0, 0);
          setMessage("Problem In Verify Email, COntact Customer Support");
        }
      }
    } else if (!password || !confirmPassword) {
      setLoading(false);
      setMessage("Fill all fields.");
    }
  };

  return (
    <>
      <FormContainrLogin
        title="New Password"
        detail="Please write your new password and confirm it."
      >
        <form className="signUp-form " onSubmit={submitHandler}>
          <div className="px-3 px-md-5">
            {message ? <Message>{message}</Message> : null}
            {loading ? <Loader>{loading}</Loader> : null}
            <div className="form-group mb-4 ">
              <label className="form-label fw-bold fs-6"> Password</label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  ref={Passwordref}
                  className="form-control form-cells"
                  placeholder="Type your password.."
                />
                <div
                  className="position-absolute top-0 end-0 pe-4 pt-3 showpass"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </div>

            <div className="form-group mb-4 ">
              <label className="form-label fw-bold fs-6">
                Confirm Password
              </label>
              <div className="position-relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  ref={ConfirmPasswordref}
                  className="form-control form-cells"
                  placeholder="Type your password.."
                />

                <div
                  className="position-absolute top-0 end-0 pe-4 pt-3 showpass "
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </div>

            <div className="d-grid mt-5 mb-3">
              <button className="btn btn1 text-light" type="submit">
                Change Password
              </button>
            </div>

            <div className="d-grid mb-5">
              <button
                className="btn btn14"
                onClick={() => {
                  navigate(-1);
                  window.scrollTo(0, 0);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </FormContainrLogin>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Body>
          <div
            className=" d-flex justify-content-end"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
          </div>

          <SuccessCard title="Password" titleText="password" />

          <div className="d-grid m-4">
            <button className="btn btn1 text-light" onClick={handleClose}>
              Dismiss
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewPassword;
