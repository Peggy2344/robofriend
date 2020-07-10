import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SeacrhBox";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";
// import { render } from "@testing-library/react";

//To gain the STATE from the property
const AppOne = () => {
  const [robots, setRobot] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robots) => {
        setRobot(robots);
      });
  });

  function getField(e) {
    setSearchField(e.target.value);
  }

  //   useEffect((e) => setSearchField(e.target.value);)

  const filterRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1>Robofriend</h1>
      <SearchBox searchChange={getField} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};
export default AppOne;
