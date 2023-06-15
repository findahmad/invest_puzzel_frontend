import React, { useState, useRef } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { useNavigate } from "react-router-dom";
import OTPtimer from "../../components/OTPtimer";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

const ValidateEmail = () => {
  const navigate = useNavigate();

  let [message, setMessage] = useState(null);
  let [loading, setLoading] = useState(false);


  const recoveryEmail = localStorage.getItem("recoveryEmail");

  const [otpDigits, setOtpDigits] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = e.target.value;
    setOtpDigits(updatedOtpDigits);

    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const otp = otpDigits.join("");
    console.log(otp);
    const jwtbyForgetPassword = localStorage.getItem("jwtbyForgetPassword");

    try {
      setLoading(true);
      let res = await fetch(
        process.env.REACT_APP_BASE_URL + "/common/confirmOtp",
        {
          method: "POST",
          body: JSON.stringify({
            code: otp,
            type: "1",
          }),
          headers: {
            Authorization: `Bearer ${jwtbyForgetPassword}`,
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
        navigate("/newPassword");
        localStorage.setItem('codebyPasswordOtp', otp)
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      window.scrollTo(0, 0);
      setMessage("Problem In Verify Email, contact Customer Support.");
    }
  };

  return (
    <>
      <FormContainrLogin
        title="Validate Email"
        detail="If you don't receive email within 2 minutes, please check junk file folder of your mail box."
      >
        <form className="signUp-form " onSubmit={submitHandler}>
          <div className="px-3 px-md-5">
            {message ? <Message>{message}</Message> : null}
            {loading ? <Loader>{loading}</Loader> : null}
            <div className="row text-center">
              <OTPtimer seconds={300} />
            </div>
            <div className="form-group mb-4 text-center">
              <div className="row">
                <div className="d-flex justify-content-between">
                  {otpDigits.map((digit, index) => (
                    <input
                      className="text-center otp-input shadow-none fw-bold "
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={digit}
                      onChange={(e) => handleInputChange(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
                </div>
              </div>

              <label className="form-label mt-3 validate-label">
                Send to {recoveryEmail}
              </label>
            </div>

            <div className="d-grid mt-5 mb-3">
              <button className="btn btn1 text-light" type="submit">
                Validate
              </button>
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn14">Resend code</button>
            </div>

            <div className="d-grid mb-5">
              <button
                className="btn btn15"
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
    </>
  );
};

export default ValidateEmail;
