import React, { useRef, useState } from "react";
import FormContainrLogin from "../../components/FormContainrLogin";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef();

  let [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // const jwtbyLogin = localStorage.getItem("jwtbyLogin");

  const submitHandler = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    console.log(email);

    try {
      setLoading(true);
      let res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/forgotPassowrdEmailCheck`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            type: "1",
          }),
          headers: {
            // Authorization: `Bearer ${jwtbyLogin}`,
            "Content-type": "application/json",
          },
        }
        
      );
      let data = await res.json();
      console.log(data);
      if (res.status == 200) {
        navigate("/validateEmail");
        localStorage.setItem("recoveryEmail", email);
        localStorage.setItem("jwtbyForgetPassword", data.data.jwt);
        setLoading(false);
      } else {
        setLoading(false);
        setMessage(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setMessage("Problem in verifying email, contact Customer Support");
    }
  };

  return (
    <>
      <FormContainrLogin
        title="Forget Password"
        detail="Please write your email used for your account to send you a code to complete the process."
      >
        <form className="signUp-form " onSubmit={submitHandler}>
          <div className="px-3 px-md-5">
            {message ? <Message>{message}</Message> : null}
            {loading ? <Loader>{loading}</Loader> : null}
            <div className="form-group mb-4 ">
              <label className="form-label fw-bold fs-6">Email</label>
              <input
                type="email"
                ref={emailRef}
                className="form-cells form-control"
                placeholder="yourmail@mail.com"
                // value={recoveryEmail}
              />
            </div>

            <div className="d-grid mt-5 mb-3">
              <button className="btn btn1 text-light" type="submit">
                Send Code
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
    </>
  );
};

export default ForgetPassword;
