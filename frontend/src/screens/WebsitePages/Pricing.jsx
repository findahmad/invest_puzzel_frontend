import React, { useState } from "react";
import FormContainer from "../../components/FormContainer";
import SemesterPricing from "../../components/SemesterPricing";
import YearlyPricing from "../../components/YearlyPricing";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const ToggleData = () => {
    setShow(!show);
  };

  const userFullName = localStorage.getItem("fullName");

  let isLoggedIn = 0;
  isLoggedIn =
    localStorage.getItem("isLoggedIn") != undefined
      ? localStorage.getItem("isLoggedIn")
      : 0;

  return (
    <>
      {isLoggedIn == 1 ? (
        <div>
          <div className="container-fluid px-3 px-md-5 pt-4">
            <div className="px-md-5">
              <div className="row">
                <div className="col-12 d-flex">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {navigate(-1); window.scrollTo(0,0)}} className="d-flex align-items-center"
                  >
                    <img
                      src="./images/back arrow.png"
                      alt="back"
                      className="pe-3"
                    />
                  </div>
                  <h1 className="fs-1 fw-bold ">{userFullName}</h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <FormContainer
        formTitle="Pricing"
        formDescription="Instant Access. Cancel anytime."
      >
        <div className="container">
          <div className="row mx-2">
            <div className="offset-md-3 col-md-6 col-lg-4 offset-lg-4 col-bg p-1">
              {show ? (
                <div className="d-flex align-items-center">
                  <div className="col-6  d-grid">
                    <button
                      className="btn btn11 bg-light py-3 px-4"
                      onClick={ToggleData}
                    >
                      Semester
                    </button>
                  </div>
                  <div className="col-6 me-5 d-grid">
                    <button className="btn btn10" disabled>
                      Yearly
                    </button>
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <div className="col-6 me-0 d-grid">
                    <button className="btn btn8" disabled>
                      Semester
                    </button>
                  </div>
                  <div className="col-6 me-0 d-grid">
                    <button
                      className="btn btn9 bg-light py-3 px-2"
                      onClick={ToggleData}
                    >
                      Yearly <span className="font3 save">Save 20%</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FormContainer>
      {show ? <YearlyPricing /> : <SemesterPricing />}
    </>
  );
};

export default Pricing;
