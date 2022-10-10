import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./components/Destination";
import Moon from "./pages/Moon";

function App() {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("./destinations.json").then((res) => {
      res.json().then((data) => {
        setDestinations(data);
        console.log(destinations);
      });
    });
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/moon"
          element={
            <Moon
              content={destinations.moon.content}
              distance={destinations.moon.distance}
              travelTime={destinations.moon.travelTime}
              title={destinations.moon.title}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
