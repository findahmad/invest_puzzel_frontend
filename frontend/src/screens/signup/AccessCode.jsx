import React, { useState } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import FormContainer from "../../components/FormContainer";
import { useNavigate } from "react-router-dom";

import Message from "../../components/Message";

const AccessCode = () => {
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const ACodebyLocalStorage = localStorage.getItem("accessCode");

  // let textRef = useRef();

  // const copy = async (e) => {
  //   e.preventDefault();
  //   let text = textRef.current.value;
  //   await navigator.clipboard.writeText(text);
  //   setMessage("Code is copied to clipboard.");
  // };

  const copy = async (e) => {
    e.preventDefault();

    await navigator.clipboard.writeText(ACodebyLocalStorage);
    setMessage("Code is copied to clipboard.");
  };

  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn == 1) {
    navigate("/profile");
    window.scrollTo(0,0)
  } else {
    if (isLoggedIn == 0) {
      navigate("/registration");
      window.scrollTo(0,0)
    } else
    
    {
      return (
        <>
          <CheckoutSteps step1 step2 step3 step4 />
          <div className="px-3 px-md-5">
            <FormContainer
              formTitle="Welcome to the WaffleStock"
              formDescription="We are glad to see you in our community"
            >
              <form className="col-md-6 offset-md-3 col-12" onSubmit={copy}>
                {message ? (
                  <Message variant="success">{message}</Message>
                ) : null}
                <div className="row pt-5">
                  <div className="form-group">
                    <label className="form-label checkout-link2 pb-3">
                      Here's your universities' unique access code:
                    </label>
                    <div className="row">
                      <div className=" col-md-8 mb-3">
                        <div className="d-sm-grid">
                          <input
                            type="text"
                            // ref={textRef}
                            onChange={(e) => e.target.value}
                            className="form-control form-cells3"
                            value={ACodebyLocalStorage}
                            placeholder="•••••••••"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="d-sm-grid ">
                          <div className="form-group">
                            <div className="d-grid ">
                              <button className="btn btn5 text-light" type="submit">
                                Copy Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="checkout-link2 text-center pb-5 mb-5">
                  Your students can access WaffleStock by using this code.{" "}
                </h1>
              </form>
            </FormContainer>
          </div>
        </>
      );
    }
  }
};

export default AccessCode;
