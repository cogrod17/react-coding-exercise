import React from "react";
import Search from "./Search";
import MissionList from "./MissionList";
import "../styles/app.css";

const App = () => {
  return (
    <div id="app-wrap">
      <Search />
      <MissionList />
    </div>
  );
};

export default App;
