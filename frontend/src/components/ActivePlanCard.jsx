import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ActivePlanCard = ({ name, pricing, time, users, list }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className="form-heading mb-md-4">{name}</h1>
            <h1 className="form-heading1 d-lg-inline pe-md-3 ">{pricing}</h1>
            <h1 className="font py-2 d-lg-inline mt-2">{time}</h1>
            <button className="btn btn7 mt-2 d-block">{users}</button>
            <div className="d-md-block d-none">
              <div className="d-grid">
                <Link to="/pricing" className="btn btn3 mt-5" type="submit">
                  Upgrade
                </Link>
              </div>
              <div className="d-grid">
                <Link
                  className="btn btn4 my-3 "
                  onClick={() => {
                    navigate(-1);
                    window.scrollTo(0, 0);
                  }}
                  type="submit"
                >
                  Cancel Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-0 d-md-flex justify-content-center align-items-center">
            <ul className="font7 mt-5">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="d-md-none">
        <div className="px-3 d-grid">
          <Link to="/pricing" className="btn btn3" type="submit">
            Upgrade
          </Link>
        </div>
        <div className=" px-3 d-grid">
          <Link
            className="btn btn4 my-3 "
            onClick={() => {
              navigate(-1);
              window.scrollTo(0, 0);
            }}
            type="submit"
          >
            Cancel Plan
          </Link>
        </div>
      </div>
    </>
  );
};

export default ActivePlanCard;
