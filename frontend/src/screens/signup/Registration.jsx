import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import Message from "../../components/Message";
import CheckoutSteps from "../../components/CheckoutSteps";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Loader from "../../components/Loader";

const Registration = () => {
  const navigate = useNavigate();

  let Emailref = useRef();
  let FullNameref = useRef();
  // let UserNameref = useRef();
  let Phoneref = useRef();
  let UniversityNameref = useRef();
  let Titleref = useRef();
  let FundNameref = useRef();
  let FundsAumref = useRef();
  let Passwordref = useRef();
  let ConfirmPasswordref = useRef();

  const [showPassword, setShowPassword] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [usernametemp, setusernametemp] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let email = Emailref.current.value;
    let fullName = FullNameref.current.value;
    let userName = email.split("@")[0];
    let phone = Phoneref.current.value;
    let universityName = UniversityNameref.current.value;
    let title = Titleref.current.value;
    let fundName = FundNameref.current.value;
    let fundAum = FundsAumref.current.value;
    let password = Passwordref.current.value;
    let confirmPassword = ConfirmPasswordref.current.value;
    // console.log(email, fullName, userName, phone, universityName, title, fundName, fundAum, password);
    localStorage.setItem("email", email);

    if (password !== confirmPassword) {
      window.scrollTo(0,0);
      setMessage("Password not match.");
    } else {

      try {
        setLoading(true)
        // let res = await fetch("http://localhost:9000/auth/registerProfessor", {
        // let res = await fetch("http://wafflestock.com/auth/registerProfessor", {
        console.log(process.env.REACT_APP_BASE_URL);
        let res = await fetch(
          process.env.REACT_APP_BASE_URL + "/auth/registerProfessor",
          {
            // let res = await fetch("https://wafflestock.com/auth/registerProfessor", {

            method: "POST",
            body: JSON.stringify({
              password: password,
              userFullName: fullName,
              email: email,
              username: userName,
              userPhone: phone,
              universityName: universityName,
              title: title,
              fundName: fundName,
              fundsAum: fundAum,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        let data = await res.json();
setLoading(false)
        console.log(data);
        if (res.status !== 200) {
          setLoading(false)
          window.scrollTo(0,0);
          setMessage(
            data.message.charAt(0).toUpperCase() + data.message.slice(1)
          );
          console.log(res);
        } 
        
        
        else {
          setLoading(false)
          localStorage.removeItem('isLoggedIn')
          navigate("/emailVerification");
          window.scrollTo(0,0)

          localStorage.setItem("jwt", data.data.jwt);
        }
      } catch (err) {
        setLoading(false)
        window.scrollTo(0,0);
        setMessage("Problem with registration! Contact Customer Support");
      }
    }
  };

  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn == 1) {
    navigate("/profile");
    window.scrollTo(0,0)
  } else {
    return (
      <>
        <CheckoutSteps step1 />
        <div className="px-3 px-md-5">
          <FormContainer formTitle="Registration">
            <form
              onSubmit={submitHandler}
              className="col-md-6 offset-md-3"
              id="contactForm"
            >
              {message ? <Message>{message}</Message> : null}
              {loading ? <Loader>{loading}</Loader> : null}
              <div className="form-group mb-3">
                <label className="form-label font2 mt-5">Full Name*</label>
                <input
                  type="text"
                  ref={FullNameref}
                  className="form-control form-cells1 mb-5"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label font2">University email*</label>
                <input
                  type="email"
                  ref={Emailref}
                  id="autoEmail"
                  className="form-control form-cells1 mb-5"
                  required
                  onChange={(e) => {
                    let unTemp = e.target.value.split("@")[0];
                    setusernametemp(unTemp);
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label font2">Username*</label>
                <input
                  type="text"
                  id="autoUserName"
                  className="form-control form-cells1 mb-5"
                  value={usernametemp}
                />
              </div>
              {/* 
            <input
              type="button"
              value="changeusername"
              onClick={setusernametemp("usman1")}
            />

             */}
              <div className="form-group mb-3">
                <label className="form-label font2">Password*</label>
                <div className="position-relative">
                  <input
                    ref={Passwordref}
                    type={showPassword ? "text" : "password"}
                    className="form-control form-cells1 mb-5"
                    required
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

              <div className="form-group mb-3">
                <label className="form-label font2">Confirm Password*</label>
                <div className="position-relative">
                  <input
                    ref={ConfirmPasswordref}
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control form-cells1 mb-5"
                    required
                    placeholder="Type your password.."
                  />
                  <div
                    className="position-absolute top-0 end-0 pe-4 pt-3 showpass"
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

              <div className="form-group mb-3">
                <label className="form-label font2">Phone Number*</label>
                <input
                  type="number"
                  ref={Phoneref}
                  className="form-control form-cells1 mb-5"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label font2">University Name*</label>
                <input
                  type="text"
                  ref={UniversityNameref}
                  className="form-control form-cells1 mb-5"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label font2">Title*</label>
                <input 
                  type="text"
                  ref={Titleref}
                  className="form-control form-cells1 mb-5"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label font2">Fund Name*</label>
                <input
                  type="text"
                  ref={FundNameref}
                  className="form-control form-cells1 mb-5"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label font2">Fund AUM ($)*</label>
                <input
                  type="number"
                  ref={FundsAumref}
                  className="form-control form-cells1 last-cell"
                  required
                />
              </div>

              <hr />
              <div className="d-grid my-4">
                <button className="btn btn2 text-light" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </FormContainer>
        </div>
      </>
    );
  }
};

export default Registration;
