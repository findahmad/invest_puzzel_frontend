import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ActivePlanCard from "../../components/ActivePlanCard";

const ActivePlan = () => {
  const descriptionList = [
    `15,000+ stock data`,
    `5 different exchanges`,
    `Portfolio Analysis`,
    `Ranking`,
    `Daily News`,
    `Upcoming IPOs`,
    `What if Scenarios`,
    `Cancel Anytime`,
  ];
  const priceArraySemester = ["$4,900", "$7,500", "$10,000"];
  const priceArrayNnually = ["$11,760", "$18,000", "$24,000"];

  let time = 'yearly';
  

  let [studentsAmount, setStudents] = useState(
    localStorage.getItem("studentsAmount")
  );
  let [plan, setPlan] = useState("");
  let [price, setPrice] = useState("");

  useEffect(() => {
    if (time === "semester") {
      if (studentsAmount == 20) {
        setPlan("Small");
        setPrice(priceArraySemester[0]);
        setStudents("0-20");
      } else if (studentsAmount == 40) {
        setPlan("Mid");
        setPrice(priceArraySemester[1]);
        setStudents("21-40");
      } else {
        setPlan("Large");
        setPrice(priceArraySemester[2]);
        setStudents("40+");
      }
    } else {
      if (studentsAmount == 20) {
        setPlan("Small");
        setPrice(priceArrayNnually[0]);
        setStudents("0-20");
      } else if (studentsAmount == 40) {
        setPlan("Mid");
        setPrice(priceArrayNnually[1]);
        setStudents("21-40");
      } else {
        setPlan("Large");
        setPrice(priceArrayNnually[2]);
        setStudents("40+");
      }
    }
  }, []);

  let userFullName = localStorage.getItem("fullName");
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid px-3 px-md-5 pt-4 py-md-5">
        <div className="px-md-5">
          <div className="row">
            <div className="col-12 d-flex">
              <div
                style={{ cursor: "pointer" }}
                className="d-flex align-items-center"
                onClick={() => {
                  navigate(-1);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="./images/back arrow.png"
                  alt="back"
                  className="pe-3"
                />
              </div>
              <h1 className=" fs-1 fw-bold ">{userFullName}</h1>
              <div className="ps-3">
                <button type="submit" className="btn btn-profile1 fw-light ">
                  Change plan
                </button>
              </div>
            </div>
            <div className=" d-flex align-items-center">
              <h1 className="fs-5 home-desc fw-bold pt-5">Active plan</h1>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-10 col-12">
              <div className="border rounded-5">
                <div className="py-3 px-md-5 px-2 d-lg-flex align-items-center">
                  <ActivePlanCard
                    name={`${plan} Cap`}
                    pricing={price}
                    time={time}
                    users={`${studentsAmount} Users`}
                    list={descriptionList}
                  ></ActivePlanCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivePlan;
