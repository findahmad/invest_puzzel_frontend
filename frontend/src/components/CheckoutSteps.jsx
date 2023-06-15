import React from "react";
import NumberCheck from "./NumberCheck";
import NumberUncheck from "./NumberUncheck";
import StepCheck from "./StepCheck";
import StepUncheck from "./StepUncheck";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="my-5">
          <h1 className="form-heading text-center">Get Access to WaffleStock for your Class</h1>
          <h1 className="font6 text-center">Join our SIMF Network</h1>
        </div>


<div className="text-center fw-bold fs-4 mb-4 d-md-none">
  <h1>Steps</h1>
</div>

        <div activeKey="/registration" className="nav d-flex justify-content-center">
          <div className=" mx-0">{step1 ? <NumberCheck number="1" /> : <NumberUncheck number="1" />}</div>
          {step2 ? (
            <div className="d-flex col-md-2 col-1 flex-box"></div>
          ) : (
            <div className="d-flex-2 col-md-2 col-1 flex-box-2"></div>
          )}
          <div className=" mx-0">{step2 ? <NumberCheck number="2" /> : <NumberUncheck number="2" />}</div>
          {step3 ? (
            <div className="d-flex col-md-2 col-1 flex-box"></div>
          ) : (
            <div className="d-flex-2 col-md-2 col-1 flex-box-2"></div>
          )}
          <div className="mx-0">{step3 ? <NumberCheck number="3" /> : <NumberUncheck number="3" />}</div>
          {step4 ? (
            <div className="d-flex  col-md-2 col-1 flex-box"></div>
          ) : (
            <div className="d-flex-2  col-md-2 col-1 flex-box-2"></div>
          )}
          <div className="mx-0">{step4 ? <NumberCheck number="4" /> : <NumberUncheck number="4" />}</div>
        </div>

        <div activeKey="/registration" className="nav d-md-flex d-none d-md-block">
          <div className="step1-padding">{step1 ? <StepCheck name="Registration" /> : <StepUncheck name="Registration" />}</div>
          <div className="step2-padding">
            {step2 ? <StepCheck name="Email Verification" /> : <StepUncheck name="Email Verification" />}
          </div>
          <div className="step3-padding">{step3 ? <StepCheck name="Payment"  /> : <StepUncheck name="Payment" />}</div>
          <div className="step4-padding">
            {step4 ? <StepCheck name="Get the Access Code" /> : <StepUncheck name="Get the Access Code" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;

