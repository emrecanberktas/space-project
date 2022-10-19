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
            <Link to="launchVehicle" className="button">
              1
            </Link>
            <Link to="spacePort" className="button">
              2
            </Link>
            <Link to="spaceCapsule" className="button">
              3
            </Link>
          </div>
          <div className="technology__leftside__content">
            <p>THE TERMINOLGY</p>
            <p>{props.title}</p>
            <p>{props.content}</p>
          </div>
        </div>
        <div className="technology__rightside">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Technology;
