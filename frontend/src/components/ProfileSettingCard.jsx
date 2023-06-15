import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Message from "./Message";
import SuccessCard from "../components/SuccessCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Loader from "./Loader";

const ProfileSettingCard = ({
  pageTitle,
  pageDescription,
  buttonTitle,
  inputTitle,
  confirmInput,
  placeholder,
  successTitle,
  successTitletext,
  submitHandler,
  message,
  confirmInputRef,
  show,
  handleClose,
  inputRef,
  loading,
  inputType
}) => {
  const navigate = useNavigate();

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
              <h1 className="fs-5 fw-bold home-desc">{pageTitle}</h1>
              <p className="home-desc py-1">{pageDescription}</p>

              <div className="row pt-3 pb-md-3">
                <form method="post" onSubmit={submitHandler}>
                  {message ? (
                    <div className="mb-5">
                      <Message>{message}</Message>
                    </div>
                  ) : null}
                  {loading ? <Loader>{loading}</Loader> : null}
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="font2 fw-bold form-label">
                            {inputTitle}
                          </label>
                          <input
                            type={inputType}
                            ref={inputRef}
                            className="form-cells1 mb-5 form-control"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="font2 fw-bold form-label">
                            {confirmInput}
                          </label>
                          <input
                            type={inputType}
                            ref={confirmInputRef}
                            className="form-cells1 mb-5 form-control"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-md-6">
                        <div className="d-grid">
                          <button
                            className="btn signUp-button text-light fw-bold"
                            // data-bs-toggle="modal" data-bs-target="#modal"
                          >
                            {buttonTitle}
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

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Body>
          <div
            className=" d-flex justify-content-end"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
          </div>
          <SuccessCard title={successTitle} titleText={successTitletext} />

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

export default ProfileSettingCard;
