import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img
          src={props.imgsrc}
          style={{ height: "10rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">{props.info}</p>
          <NavLink exact to="contact" className="btn btn-primary">
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
