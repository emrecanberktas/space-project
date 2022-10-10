import React from "react";
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
            <p className="navbar__titles">HOME</p>
          </li>
          <li className="navbar__item">
            <p className="navbar__numbers">01</p>
            &emsp;
            <p className="navbar__titles">DESTINATION</p>
          </li>

          <li className="navbar__item">
            <p className="navbar__numbers">02</p>
            &emsp;
            <p className="navbar__titles">CONTACT</p>
          </li>
          <li className="navbar__item">
            <p className="navbar__numbers">03</p>
            &emsp;
            <p className="navbar__titles">TECHNOLOGY</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
