import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Destination.css";

function Destination(props) {
  return (
    <div className="destination">
      <Navbar />
      <div className="destination__container">
        <div className="destination__left__side">
          <div className="destination__left__side__title">
            <h2>01</h2>
            &emsp;
            <h3>PICK YOUR DESTINATION</h3>
          </div>
          <div className="destination__image">
            <img src={props.image} alt="" />
          </div>
        </div>
        <div className="destination__right__side">
          <div className="destinations">
            <Link className="destinations__links" to="/moon">
              MOON
            </Link>
            <Link className="destinations__links" to="/mars">
              MARS
            </Link>
            <Link className="destinations__links" to="/europa">
              EUROPA
            </Link>
            <Link className="destinations__links" to="/titan">
              TITAN
            </Link>
          </div>
          <div className="destination__right__side__title">{props.title}</div>
          <div className="destination__right__side__content">
            <p>{props.content}</p>
          </div>
          <div className="destination__travel__infos">
            <div className="destination__travel__infos__distance">
              <h2>AVG. DISTANCE</h2>
              <p>{props.distance}</p>
            </div>
            <div className="destination__travel__infos__travel__time">
              <h2>EST. TRAVEL TIME</h2>
              <p>{props.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
