import React from "react";
import Footer from "../../components/Footer";


const WhatWeDo = () => {
  return (
    <>
  <div className="main_div">


      <div className="back-img">
        <div className="cover-img">
          <div className="container center-content pb-5">
            <div className="row">
              <div className="col-12 ">
                <h1 className="heading text-center fs-1">InvestPuzzle</h1>
                <p className="fs-5 pt-3 paragraph ">
                  It is a company dedicated to increasing Financial Education
                  among students in a fun and interactive way. We have designed
                  a mobile application, "WaffleStock”, especially for the
                  ”Student Managed Investment Fund” course. We believe in the
                  idea of “Practice Makes Perfect”. Therefore, we are allowing
                  the students to practice trading without negative
                  consequences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="waffle pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pe-md-5 d-flex align-items-center">
              <div className="mb-4">
                <img
                  src="./images/wwd-mobile.png"
                  alt="mobile"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-6 mobile-box text-center text-md-start d-flex">
              <h2 className="waffle-heading fw-bold fs-3 mt-3">
                Using <span className="title-color">WaffleStock</span> <span className="fw-light">&trade;</span>
              </h2>
              <p className="waffle-para">
                Users get 1 million hypothetical dollars to invest however they
                want. The app will display their returns, portfolio analysis,
                geographic and sector breakdown, and other financial tools that
                help students better understand the market. On the platform,
                users can interact with each other; they can post, create groups
                and be a part of the nationwide competition for the highest
                returns. WaffleStock provides live data on stocks from more than
                5 different exchanges, along with the stocks’ financial metrics
                and reports.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile ">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mobile-box text-center text-md-start d-flex">
              <h1 className="waffle-heading fw-bold pb-2 fs-3 ">
                What If Scenarios
              </h1>
              <p className=" mobile-para pe-md-5">
                WaffleStock also offers “What If Scenarios”, where users can
                create a scenario and test how the outcomes affect people’s
                portfolios.
              </p>
            </div>
            <div className="col-md-5 img-back px-md-5 d-flex align-items-center">
              <div>
                <img
                  src="./images/what-if-scenarios.png"
                  alt=""
                  className="img-fluid bord-radius"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle">
        <div className="container">
          <div className="row">
            <div className="col-md-5 img-back d-flex align-items-center">
              <div>
                <img
                  src="./images/brand3.jpg"
                  alt="logo"
                  className="img-fluid bord-radius"
                />
              </div>
            </div>
            <div className="col-md-7 mobile-box pt-5 text-center text-md-start d-flex ps-md-5">
              <h1 className="waffle-heading fw-bold fs-3">
                The Idea Behind the Name - WaffleStock
              </h1>
              <p className=" mobile-para">
                The name "WaffleStock" comes from the first pancake theory: “The
                first one turns out messed up because you’re out of practice or
                haven’t made pancakes before. The second and following pancakes
                come out perfectly round and golden.” The same thinking applies
                to waffles. Making waffles is our metaphor for investing in the
                stock market, where WaffleStock is the practice place to make
                profitable investments.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      </div>
    </>



  
  );
};

export default WhatWeDo;
