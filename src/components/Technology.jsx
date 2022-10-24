import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Technology.css";

function Technology(props) {
  return (
    <div className="technology">
      <Navbar />
      <div className="technology__container">
        <div className="tecnology__leftside">
          <div className="technology__leftside__title">
            <h2>03</h2>
            &emsp;
            <h3>SPACE LAUNCH 101</h3>
          </div>
          <div className="technology__buttons">
            <Link to="/launchVehicle" className="technology__button">
              1
            </Link>
            <Link to="/spacePort" className="technology__button">
              2
            </Link>
            <Link to="/spaceCapsule" className="technology__button">
              3
            </Link>
          </div>
        </div>
        <div className="technology__leftside__container">
          <p className="terminology">THE TERMINOLOGY...</p>
          <p className="technology__title">{props.title}</p>
          <p className="technology__content">{props.content}</p>
        </div>
        <div className="technology__rightside">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Technology;
