import React from "react";
import "../styles/flightview.css";

const FlightView = ({ mission, back }) => {
  const backToList = () => back(null);

  return (
    <div id="app-wrap-view">
      <div className="flight-ticket-wrap">
        <div onClick={backToList} id="back-to-list-btn"></div>
        <div className="flight-ticket">
          <div id="mission-name-ticket" className="ticket-info">
            <span>Mission Name</span>
            <span id="name-big">{mission.mission_name}</span>
          </div>
          <div id="rocket-name-ticket" className="ticket-info">
            <span>Rocket Name</span>
            <span>{mission.rocket.rocket_name}</span>
          </div>
          <div id="rocket-type-ticket" className="ticket-info">
            <span>Rocket Type</span>
            <span>{mission.rocket.rocket_type}</span>
          </div>
          <div id="launch-year-ticket" className="ticket-info">
            <span>Launch Year</span>
            <span>{mission.launch_year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightView;
