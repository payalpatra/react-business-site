import React from "react";
import "../styles/Common.css";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column">
                  <h1 className="bold">
                    {props.name}
                    <strong className="brand-name"> PP_Technical</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developers making responsive
                    websites.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="About img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
