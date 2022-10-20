import React from "react";
import Navbar from "./Navbar";
import "./Crew.css";
import { Link } from "react-router-dom";

function Crew(props) {
  return (
    <div className="crew">
      <Navbar />
      <div className="crew__container">
        <div className="crew__left__side">
          <div className="crew__left__side__title">
            <h2>02</h2>
            &emsp;
            <h3>meet your crew</h3>
          </div>
          <div className="crew__title">{props.title}</div>
          <div className="crew__name">{props.name}</div>
          <div className="crew__info">{props.info}</div>
          <div className="buttons__section">
            <Link className="crew__button" to="/commander"></Link>
            <Link className="crew__button" to="/pilot"></Link>
            <Link className="crew__button" to="/missionSpecialist"></Link>
            <Link className="crew__button" to="/flightEngineer"></Link>
          </div>
        </div>
        <div className="crew__right__side">
          <img className="crew__image" src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Crew;
