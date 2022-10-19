import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./components/Destination";
import axios from "axios";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  const [destinations, SetDestinations] = useState(null);
  const [crew, setCrew] = useState(null);
  const [technology, setTechnology] = useState(null);
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

  const getTechnologyData = () => {
    axios.get("./technology.json").then((res) => {
      setTechnology(res.data);
      console.log(technology);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPlanetsData();
    getCrewData();
    getTechnologyData();
  }, []);

  if (!destinations) {
    return <div>Loading...</div>;
  }
  if (!crew) {
    return <div>Loading...</div>;
  }
  if (!technology) {
    return <div>Loading...</div>;
  }
  console.log(crew);

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
        <Route
          path="/pilot"
          element={
            <Crew
              name={crew.pilot.name}
              info={crew.pilot.info}
              image={crew.pilot.image}
              title={crew.pilot.title}
            />
          }
        />
        <Route
          path="/missionSpecialist"
          element={
            <Crew
              name={crew.mission_specialist.name}
              info={crew.mission_specialist.info}
              image={crew.mission_specialist.image}
              title={crew.mission_specialist.title}
            />
          }
        />
        <Route
          path="/flightEngineer"
          element={
            <Crew
              name={crew.flight_engineer.name}
              info={crew.flight_engineer.info}
              image={crew.flight_engineer.image}
              title={crew.flight_engineer.title}
            />
          }
        />
        <Route
          path="launchVehicle"
          element={
            <Technology
              title={technology.launchVehicle.title}
              content={technology.launchVehicle.content}
              image={technology.launchVehicle.image}
            />
          }
        />
        <Route
          path="spacePort"
          element={
            <Technology
              title={technology.spacePort.title}
              content={technology.spacePort.content}
              image={technology.spacePort.image}
            />
          }
        />
        <Route
          path="spaceCapsule"
          element={
            <Technology
              title={technology.spaceCapsule.title}
              content={technology.spaceCapsule.content}
              image={technology.spaceCapsule.image}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
