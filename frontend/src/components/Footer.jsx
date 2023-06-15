import React from "react";
import { Link } from "react-router-dom";
import privacyPdf from "../pdfs/InvestPuzzle Privacy policy.pdf";
import tncPdf from "../pdfs/InvestPuzzle LLC Terms and condition.pdf";

const Footer = () => {
  return (
    <>
      <footer className="footer1">
        <div className="container-fluid footer mt-md-5 px-md-5">
          <div className="col-12">
            <div className="px-5  fw-bold">
              <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="align-items-end text-center text-lg-start">
                  <h1 className="fs-6 fw-bold text-md-end mb-4">
                    Follow us on
                  </h1>

                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <div className=" me-3 mb-3 ">
                      <Link to="https://www.linkedin.com/company/investpuzzle/" target="_blank">
                        <img src="./images/Vector.png" alt="Linkdin" />
                      </Link>
                    </div>
                    <div className=" me-3 mb-3 ">
                      <Link to="https://www.instagram.com/invest.puzzle/" target="_blank"> 
                        <img src="./images/Vector (1).png" alt="instagram" />
                      </Link>
                    </div>
                    <div>
                      <Link to="https://twitter.com/investpuzzle" target="_blank">
                        <img src="./images/Vector (2).png" alt="twitter" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className=" d-md-flex align-items-center mt-4 ">
                <div className=" pe-5 pb-2">
                  <Link to={privacyPdf} target="_blank" className="pdf">
                    Privacy Policy
                  </Link>
                </div>
                <div className=" pe-5 pb-2">
                  <Link to={tncPdf} target="_blank" className="pdf">
                    Terms and Conditions{" "}
                  </Link>
                </div>
                <div className=" pe-5 pb-2">
                  <Link to="mailto:info@investpuzzle.com" className="pdf">
                    info@investpuzzle.com
                  </Link>
                </div>
                <div className=" pe-5 pb-2">
                  <Link to="tel:703-901-3144" className="pdf">
                    703-901-3144
                  </Link>
                </div>
                <div className="ms-auto pb-2">InvestPuzzle, LLC</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
