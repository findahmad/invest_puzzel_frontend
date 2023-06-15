import React from "react";
import PricingCard from "./PricingCard";

const YearlyPricing = () => {
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

  const plans = [
    {
      id: 1,
      name: "Small Cap",
      pricing: "$11,760",
      users: "0-20 Users",
    },
    {
      id: 2,
      name: "Mid Cap",
      pricing: "$18,000",
      users: "21-40 Users",
    },
    {
      id: 3,
      name: "Large Cap",
      pricing: "$24,000",
      users: "40+ Users",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {plans.map((p) => (
            <div className="col-md-6 col-xl-4 col-sm-12" key={p.id}>
              <div className=" m-3 border rounded-5">
                <div className="py-3 ps-4">
                  <PricingCard
                    name={p.name}
                    pricing={p.pricing}
                    time="yearly"
                    users={p.users}
                    list={descriptionList}
                  ></PricingCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YearlyPricing;
