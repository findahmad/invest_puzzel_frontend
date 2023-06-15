import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Modal} from "react-bootstrap";
import Message from '../../components/Message'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import SuccessCard from "../../components/SuccessCard";
import Loader from "../../components/Loader";




const ChangeFullName = () => {

  const navigate = useNavigate();
  let [message, setMessage] = useState();
  let [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => navigate('/changeSettings');
  const handleShow = () => setShow(true);

  const jwtbyLogin = localStorage.getItem("jwtbyLogin");

  let fullNameRef = useRef();


  const submitHandler = async (e) => {
    e.preventDefault();
    let fullName = fullNameRef.current.value;


    if (fullName) {
      
        try {
          setLoading(true);
          let res = await fetch(
            process.env.REACT_APP_BASE_URL + `/users/changefullname`,
            {
              method: "POST",
              body: JSON.stringify({
                userFullName: fullName,
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
            setMessage(data.message);
            
          } else {
            handleShow();
            localStorage.setItem('fullName', fullName)
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
          setMessage("Problem with changing full name, contact Customer Support.");
        }
     
    } else {
      setMessage("Enter credentials.");
    }
  };

  return (
    <>

<div className="container-fluid px-3 px-md-5 py-4 py-md-5">
        <div className="px-md-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div style={{ cursor: "pointer" }} onClick={() => {navigate(-1); window.scrollTo(0,0)}}>
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
              <h1 className="fs-5 fw-bold home-desc">Change Full Name</h1>
              <p className="home-desc py-1">Please write your new full name.</p>

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
                          Full Name
                          </label>
                          <input
                            type="fullName"
                            ref={fullNameRef}
                            className="form-cells1 mb-5 form-control"
                            placeholder="Charlie Brown Morgan"
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
                            Update full name
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
          <SuccessCard title="Full Name" titleText="full name" />

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



export default ChangeFullName;




