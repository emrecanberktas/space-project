import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__container">
        <div className="homepage__left__side">
          <p className="homepage__bigger__p">SO, YOU WANT TO TRAVEL TO</p>
          <p className="homepage__title">SPACE</p>
          <p className="homepage__content">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="homepage__right__side">EXPLORE</div>
      </div>
    </div>
  );
}

export default Home;
