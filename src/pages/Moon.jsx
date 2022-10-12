import React from "react";
import Navbar from "../components/Navbar";
import "./Moon.css";
import { Link } from "react-router-dom";

function Moon() {
  return (
    <div className="moon">
      <Navbar />
      <div className="moon__container">
        <div className="moon__left__side">
          <div className="moon__left__side__title">
            <h2>01</h2>
            <h2>PICK YOUR DESTINATION</h2>
            <div className="moon__image"></div>
          </div>
        </div>
        <div className="moon__right__side">
          <div className="destinations">
            <Link to="/moon"></Link>
            <Link to="/mars"></Link>
            <Link to="/europa"></Link>
            <Link to="/titan"></Link>
          </div>
          <div className="moon__right__side__title">MOON</div>
          <div className="moon__right__side__content">
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <div className="moon__travel__infos"></div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
