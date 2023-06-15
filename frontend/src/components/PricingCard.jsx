import React from "react";
import { Link } from "react-router-dom";

const PricingCard = ({ name, pricing, time, users, list }) => {

let isLoggedIn = localStorage.getItem('isLoggedIn')



  return (
    <>
      <div className="px-3">
        <h1 className="form-heading">{name}</h1>
        <h1 className="form-heading1">{pricing}</h1>
        <h1 className="font py-2">{time}</h1>
        <button className="btn btn7">{users}</button>
      </div>
      <div>
        <ul className="font7 mt-5 ps-3">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ps-3 pe-5 d-grid">
        {
          isLoggedIn == 1 ? <Link to="/payment" className="btn btn3 mb-md-5 mb-4 mt-3" type="submit">
          Upgrade
        </Link> : <Link to="/registration" className="btn btn3 mb-md-5 mb-4 mt-3" type="submit">
          Get Started{" "}
        </Link>
        }
      </div>
    </>
  );
};

export default PricingCard;
