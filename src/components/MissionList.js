import React, { useState } from "react";
import Mission from "./Mission";
import "../styles/missionlist.css";
import { getLaunchesPast } from "../api";
import { useQuery } from "@apollo/react-hooks";

const MissionList = () => {
  const [category, setCategory] = useState("Launch Year");
  const [ascending, setAscending] = useState(false);
  const [page, setPage] = useState(10);
  const { loading, data, error } = useQuery(
    getLaunchesPast(ascending, category, page)
  );

  const paginate = () => {
    setPage(page + 10);
  };
  const changeSort = (e) => {
    let click = e.target.innerHTML;
    if (category !== click) setCategory(click);
    if (category === click) setAscending(!ascending);
  };

  const renderMissions = () => {
    return data.launchesPast.map((mission, i) => {
      return <Mission mission={mission} key={i} />;
    });
  };

  const setClass = (tag) => {
    let arrow = ascending ? "ascending" : "descending";
    return tag === category ? `active ${arrow}` : "muted";
  };

  return (
    <div className="mission-list-wrap">
      <div className="mission-list-head">
        <span className={setClass("Mission Name")} onClick={changeSort}>
          Mission Name
        </span>
        <span className={setClass("Rocket Name")} onClick={changeSort}>
          Rocket Name
        </span>
        <span className={setClass("Rocket Type")} onClick={changeSort}>
          Rocket Type
        </span>
        <span className={setClass("Launch Year")} onClick={changeSort}>
          Launch Year
        </span>
      </div>
      {loading && <div className="mission-list-loading">Loading...</div>}
      {data && (
        <ul className="mission-list">
          {data && renderMissions()}
          <button className="paginate-btn">Load more</button>
        </ul>
      )}
      {error && <div className="mission-list-error">There was an error</div>}
    </div>
  );
};

export default MissionList;

/*
const getProperty = (obj, property) => {
  return property === "launch_year" || property === "mission_name"
    ? obj[property]
    : obj.rocket[property];
};
console.log(data);
  function comparator(a, b) {
    const valA = getProperty(a, keys[category]);
    const valB = getProperty(b, keys[category]);

    if (valA < valB) return ascending ? -1 : 1;
    if (valA > valB) return ascending ? 1 : -1;
    return 0;
  }
*/
