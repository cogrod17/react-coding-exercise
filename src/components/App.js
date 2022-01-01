import React, { useState } from "react";
import FlightView from "./FlightView";
import MissionList from "./MissionList";
import "../styles/app.css";

const App = () => {
  const [activeFlight, setActiveFlight] = useState(null);

  return (
    <>
      {!activeFlight && <MissionList viewFlight={setActiveFlight} />}
      {activeFlight && (
        <FlightView mission={activeFlight} back={setActiveFlight} />
      )}
    </>
  );
};

export default App;
