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
            <div href="#" className="navbar__link">
              <p className="homepage__numbers">00</p>
              Home
            </div>
          </li>
          <li className="navbar__item">
            <div href="#" className="navbar__link">
              <p className="homepage__numbers">01</p>
              About
            </div>
          </li>

          <li className="navbar__item">
            <div href="#" className="navbar__link">
              <p className="homepage__numbers">02</p>
              Contact
            </div>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">
              <p className="homepage__numbers">03</p>
              Technology
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
