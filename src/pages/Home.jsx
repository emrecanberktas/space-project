import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <p className="homepage__bigger__p">SO, YOU WANT TO TRAVEL TO</p>
      <p className="homepage__biggest__p">SPACE</p>
      <p className="homepage__smallest__p">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <div>EXPLORE</div>
    </div>
  );
}

export default Home;
