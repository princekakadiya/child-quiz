import React from "react";
import { Link } from "react-router-dom";
import family from "../assets/image/undraw_family_vg76.svg";

const Dashboard = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mt-5 pt-5 position-relative">
                <h1 className="pt-5 mt-5">
                  Any Description Lorem Any Type last 
                  Environment
                </h1>
                {/* <div className="position-absolute top-0 start-100 translate-middle">
                  <svg width="30px" height="21px">
                    <path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path>
                  </svg>
                </div> */}
              </div>
              <Link
                to="quiz"
                className="btn btn-lg btn-outline-danger mt-4"
              >
                Get Started
              </Link>
            </div>
            <div className="col-md-6 mt-5 mb-5">
              <img src={family} alt="family" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
