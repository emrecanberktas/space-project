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
            &emsp;
            <h3>PICK YOUR DESTINATION</h3>
          </div>
          <div className="moon__image"></div>
        </div>
        <div className="moon__right__side">
          <div className="destinations">
            <Link to="/moon">MOON</Link>
            <Link to="/mars">MARS</Link>
            <Link to="/europa">EUROPA</Link>
            <Link to="/titan">TITAN</Link>
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
          <div className="moon__travel__infos">
            <div className="moon__travel__infos__distance">
              <h2>AVG. DISTANCE</h2>
              <p>384,400 km</p>
            </div>
            <div className="moon__travel__infos__travel__time">
              <h2>EST. TRAVEL TIME</h2>
              <p>3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
