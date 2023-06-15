import React from "react";
import { Link } from "react-router-dom";
import {members, boardOfDirectors} from './teamData'

const Team = () => {

  return (
    <>
      <div className="container my-5">
        
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fs-3 text-color  fw-bold mt-5">
              Meet our team
            </h1>
            <p className="text-center text-color fs-5 mt-3 lh-sm">
              We are a group of dedicated professionals who are passionate about
              what we do.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          {members.map((member) => (
            <div className="col-md-4 col-lg-3 my-2 my-md-4" key={member.id}>
              <div>
                <div className="img-class-team">
                  <img
                    src={member.image}
                    alt="team"
                    className="img-fluid rounded-3 px-3 px-md-0 img-class-team"
                  />
                </div>
                <div className="mt-4 mx-1 px-3 px-md-0">
                  <h1 className="fs-6 job-desc my-3 fw-bold">{member.name}</h1>
                  <h1 className="fs-6 job-desc mb-3 fw-light">
                    {member.jobDesc}
                  </h1>
                  <div>
                    <Link to={member.linkdin} target="_blank">
                      <img
                        src="./images/linkdin.png"
                        alt="linkdin"
                        className="img-fluid my-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <h1 className="text-center fs-2 fw-bold">Board of Directors</h1>
          {boardOfDirectors.map((bod) => (
            <div className="col-md-4 col-lg-3 my-2 my-md-5" key={bod.id}>
              <div>
                <div className="img-class-team pe-2">
                  <img
                    src={bod.image}
                    alt="team"
                    className="img-fluid rounded-3 px-3 px-md-0 img-class-team"
                  />
                </div>
                <div className="mt-4 mx-1 px-3 px-md-0">
                 <div style={{height: '7.5em'}}>
                 <h1 className="fs-6 job-desc my-3 fw-bold">{bod.name}</h1>
                  <h1 className="fs-6 job-desc mb-2 fw-light">
                    {bod.jobDesc}
                  </h1>
                  <h1 className="fs-6 job-desc mb-3 fw-light">
                    {bod.organization}
                  </h1>
                 </div>
                  <div>
                    <Link to={bod.linkdin} target="_blank">
                      <img
                        src="./images/linkdin.png"
                        alt="linkdin"
                        className="img-fluid my-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </>
  );
};

export default Team;
