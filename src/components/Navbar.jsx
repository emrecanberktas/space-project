import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo__oval">
          <div className="navbar__line"></div>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <p className="navbar__numbers">00</p>
            &emsp;
            <Link className="navbar__titles">HOME</Link>
          </li>
          <li className="navbar__item">
            <p className="navbar__numbers">01</p>
            &emsp;
            <Link className="navbar__titles">DESTINATION</Link>
          </li>

          <li className="navbar__item">
            <p className="navbar__numbers">02</p>
            &emsp;
            <Link className="navbar__titles">CREW</Link>
          </li>
          <li className="navbar__item">
            <p className="navbar__numbers">03</p>
            &emsp;
            <Link className="navbar__titles">TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
