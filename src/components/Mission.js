import React from "react";
import "../styles/missionitem.css";

const Mission = ({ mission }) => {
  const { mission_name, rocket, launch_year } = mission;

  return (
    <li className="mission-item">
      <p id="mission-name">{mission_name}</p>
      <p id="rocket-name">{rocket.rocket_name}</p>
      <p id="rocket-type">{rocket.rocket_type}</p>
      <p id="launch-year">{launch_year}</p>
    </li>
  );
};

export default Mission;
