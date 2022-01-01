import React, { useState } from "react";
import Mission from "./Mission";
import Search from "./Search";
import Loader from "./Loader";
import "../styles/missionlist.css";
import { getLaunchesPast } from "../api";
import { useQuery } from "@apollo/react-hooks";

let keys = {
  "Mission Name": "mission_name",
  "Rocket Name": "rocket_name",
  "Rocket Type": "rocket_type",
  "Launch Year": "launch_year",
};

const MissionList = ({ viewFlight }) => {
  const [category, setCategory] = useState("Launch Year");
  const [ascending, setAscending] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mission_name, setMissionName] = useState(null);
  const { loading, data, error, fetchMore } = useQuery(getLaunchesPast, {
    variables: {
      order: ascending ? "asc" : "desc",
      sort: keys[category],
      mission_name,
      offset,
      limit: 6,
    },
  });

  const onLoadMore = () => {
    setOffset(offset + 6);
    fetchMore({ variables: { offset, limit: 6 } });
  };

  const changeSort = (e) => {
    setOffset(0);
    let click = e.target.innerHTML;
    if (category !== click) setCategory(click);
    if (category === click) setAscending(!ascending);
  };

  const renderMissions = () => {
    return data.launchesPast.map((mission, i) => {
      return <Mission mission={mission} viewFlight={viewFlight} key={i} />;
    });
  };

  const setClass = (tag) => {
    let arrow = ascending ? "ascending" : "descending";
    return tag === category ? `active ${arrow}` : "muted";
  };

  return (
    <div id="app-wrap-list">
      <Search setMissionName={setMissionName} />
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
        {loading && <Loader />}
        {data && (
          <ul className="mission-list">
            {data && renderMissions()}
            <button onClick={onLoadMore} className="paginate-btn">
              Load more
            </button>
          </ul>
        )}
        {error && <div className="mission-list-error">There was an error</div>}
      </div>
    </div>
  );
};

export default MissionList;
