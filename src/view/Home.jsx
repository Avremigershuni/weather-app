import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import WeatherWindow from "./WeatherWindow";

const Home = () => {
  return (
    <React.Fragment>
      <SearchBox />
      <WeatherWindow />
    </React.Fragment>
  );
};
export default Home;
