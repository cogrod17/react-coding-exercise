import React, { useState } from "react";
import "../styles/search.css";

const Search = ({ setMissionName }) => {
  const [term, setTerm] = useState("");

  const onType = (e) => setTerm(e.target.value);

  const onSearch = (e) => {
    e.preventDefault();
    setMissionName(term);
    setTerm("");
  };

  return (
    <div id="header">
      <div id="title"></div>
      <form onSubmit={onSearch} id="search">
        <input onChange={onType} type="text" placeholder="Search for flights" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
