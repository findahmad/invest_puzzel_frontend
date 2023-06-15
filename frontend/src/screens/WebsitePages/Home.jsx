import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
    <div className="main_div">
      <div className="container my-5">
        <div className="row text-center my-4">
          <h1 className="home-heading fw-bold fs-2">
            InvestPuzzle presents{" "}
            <span className="title-color">WaffleStock</span> <span className="fw-light">&trade;</span>
          </h1>
          <p className="home-desc mt-3 fs-5 lh-sm px-3 px-md-5">
            <span className="fw-bold">WaffleStock</span> is an app designed for
            SMIF students to practice trading, interact with each other, and
            compete for the highest rankings.
          </p>
        </div>
        <div className="row">
          <video
            id="vid"
            width="100%"
            height="100%"
            src="./videos/video.mp4"
            type="video/mp4"
            muted={true}
            controls
            loop={true}
            autoPlay={true}
            poster="./images/video-poster.png"
          />
        </div>

        <div className="row d-md-flex justify-content-center">
          <div className="col-lg-6 col-md-12 d-md-flex align-items-center justify-content-center">
            <div className="row text-center">
              <div>
                <img
                  src="./images/Frame 14272.png"
                  alt="mobile 1"
                  className="img-fluid mt-5 mt-md-0"
                  style={{ height: "30em" }}
                />
              </div>
            </div>
            <div className="row text-center">
              <div className="pt-lg-5 mt-lg-5 ps-md-5">
                <img
                  src="./images/Frame 14277.png"
                  alt="mobile 2"
                  className="img-fluid my-5"
                  style={{ height: "30em" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center justify-content-center home-heading">
            <div className="align-items-center text-center text-lg-start">
              <h1 className="fs-3 fw-bold px-0 px-md-5">
                JOIN SIMF'S COMMUNITY <br />
                Download WaffleStack
              </h1>

              <div className="d-flex px-3 px-md-5 my-3 justify-content-center justify-content-lg-start">
                <div className=" me-3 mb-3 ">
                  <Link
                    to="https://apps.apple.com/us/app/wafflestock/id6444378316"
                    target="_blank"
                  >
                    <img src="./images/image 1.png" alt="app store" />
                  </Link>
                </div>
                <div>
                  <img src="./images/image 2.png" alt="play store" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid home-container-2 py-3 py-md-5">
        <div className="container">
          <div className="row pt-5 pb-4 pb-md-5">
            <div className="col-12 text-center">
              <h1 className="fs-2 fw-bold">Our Data Providers</h1>
            </div>
          </div>
          <div className="row text-center px-0 px-lg-5 pb-4">
            <div className="col-md-6 ps-lg-5">
              <h1 className="fs-5 fw-bold mb-4">FactSet Research System Inc</h1>
              <div className="mb-4">
                <img src="./images/image 3.png" alt="research image" />
              </div>

              <Link
                to="https://www.factset.com"
                className="link-1"
                target="_blank"
              >
                <h1 className="fs-6 home-links mb-4 mb-md-0">
                  www.factset.com
                </h1>
              </Link>
            </div>
            <div className="col-md-6 pe-lg-5">
              <h1 className="fs-5 fw-bold mb-4">Financial Modeling Prep</h1>
              <div className="mb-4">
                <img src="./images/image 5.png" alt="research image" />
              </div>

              <Link
                to="https://site.financialmodelingprep.com"
                className="link-1"
                target="_blank"
              >
                <h1 className="fs-6 home-links">
                  site.financialmodelingprep.com
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Home;
