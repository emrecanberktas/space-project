import React from "react";
import "./Destination.css";
import Navbar from "./Navbar";

function Destination() {
  return (
    <div className="destination">
      <Navbar />
      <div className="destination__container">
        <div className="destination__left__side">
          <div>
            <p>01</p>
            <h1>PICK YOUR DESTINATION</h1>
            <div className="destination__image"></div>
          </div>
        </div>
        <div className="destination__right__side"></div>
      </div>
    </div>
  );
}

export default Destination;
