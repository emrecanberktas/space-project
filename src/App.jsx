import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./components/Destination";
import axios from "axios";

function App() {
  const [destinations, SetDestinations] = useState({});

  useEffect(() => {
    axios.get("./destinations.json").then((res) => {
      SetDestinations(res.data);
      console.log(destinations);
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/moon"
          element={
            <Destination
              content={destinations.moon.content}
              distance={destinations.moon.distance}
              travelTime={destinations.moon.travelTime}
              title={destinations.moon.title}
              image={destinations.moon.image}
            />
          }
        />
        <Route
          path="/mars"
          element={
            <Destination
              content={destinations.mars.content}
              distance={destinations.mars.distance}
              travelTime={destinations.mars.travelTime}
              title={destinations.mars.title}
              image={destinations.mars.image}
            />
          }
        />
        <Route
          path="/europa"
          element={
            <Destination
              content={destinations.europa.content}
              distance={destinations.europa.distance}
              travelTime={destinations.europa.travelTime}
              title={destinations.europa.title}
              image={destinations.europa.image}
            />
          }
        />
        <Route
          path="/titan"
          element={
            <Destination
              content={destinations.titan.content}
              distance={destinations.titan.distance}
              travelTime={destinations.titan.travelTime}
              title={destinations.titan.title}
              image={destinations.titan.image}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
