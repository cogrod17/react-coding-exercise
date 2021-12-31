import React from "react";
import "../styles/flightview.css";

const FlightView = () => {
  return (
    <div id="app-wrap-view">
      <div className="flight-ticket-wrap">
        <div id="back-to-list-btn"></div>
        <div className="flight-ticket">
          <div id="mission-name-ticket" className="ticket-info">
            <span>Mission Name</span>
            <span>2017</span>
          </div>
          <div id="rocket-name-ticket" className="ticket-info">
            <span>Rocket Name</span>
            <span>2017</span>
          </div>
          <div id="rcoket-type-ticket" className="ticket-info">
            <span>Rocket Type</span>
            <span>2017</span>
          </div>
          <div id="launch-year-ticket" className="ticket-info">
            <span>Launch Year</span>
            <span>2017</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightView;
