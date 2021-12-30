import React from "react";
import Mission from "./Mission";
import "../styles/missionlist.css";
import { getLaunchesPast } from "../api";
import { gql, useQuery } from "@apollo/react-hooks";

const MissionList = () => {
  const { loading, data, error } = useQuery(getLaunchesPast);

  if (loading) return <div>Loading...</div>;
  console.log(data);

  const renderMissions = () => {
    return data.launchesPast.map((mission, i) => {
      return <Mission mission={mission} key={i} />;
    });
  };

  return (
    <div className="mission-list-wrap">
      {data && <ul className="mission-list">{data && renderMissions()}</ul>}
      {error && <div className="mission-list-error">There was an error</div>}
    </div>
  );
};

export default MissionList;
