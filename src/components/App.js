import React, { useState } from "react";
import FlightView from "./FlightView";
import MissionList from "./MissionList";
import "../styles/app.css";

const App = () => {
  const [activeFlight, setActiveFlight] = useState(true);

  return (
    <>
      {!activeFlight && <MissionList />}
      {activeFlight && <FlightView />}
    </>
  );
};

export default App;
