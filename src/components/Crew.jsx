import React from "react";
import Navbar from "./Navbar";
import "./Crew.css";

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
          <div className="buttons"></div>
        </div>
        <div className="crew__image"></div>
      </div>
    </div>
  );
}

export default Crew;
