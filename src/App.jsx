import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./components/Destination";
import axios from "axios";
import Crew from "./components/Crew";

function App() {
  const [destinations, SetDestinations] = useState({});
  const [crew, setCrew] = useState({});
  const [loading, setLoading] = useState(true);

  const getPlanetsData = () => {
    axios.get("./destinations.json").then((res) => {
      SetDestinations(res.data);
      console.log(destinations);
      setLoading(false);
    });
  };

  const getCrewData = () => {
    axios.get("./crew.json").then((res) => {
      setCrew(res.data);
      console.log(crew);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPlanetsData();
    getCrewData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
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
        <Route
          path="/commander"
          element={
            <Crew
              name={crew.commander.name}
              info={crew.commander.info}
              image={crew.commander.image}
              title={crew.commander.title}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
