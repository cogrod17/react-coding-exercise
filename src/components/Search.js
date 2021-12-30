import React from "react";
import "../styles/search.css";

const Search = () => {
  return (
    <div id="header">
      <div id="title"></div>
      <form id="search">
        <input type="text" placeholder="Search for flights" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
