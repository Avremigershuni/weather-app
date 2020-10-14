import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { WeatherInfo } from "../data/StateManager";

const log = console.log;
const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const { result, setResult, baseUrl } = useContext(WeatherInfo);
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const getAutoCompleteCities = async () => {
    const data = await axios.get(`${baseUrl}q=${inputValue}`);
    // const cities = await data.json();
    // const data = await fetch(`${baseUrl}q=${inputValue}`);
    // setResult([data])
    log(data);
    // log(result);
    // debugger
    setCitiesList([data]);
  };
  useEffect(() => {
    getAutoCompleteCities();
  }, [inputValue]);

  return (
    <>
      <Input
        name="city"
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e.target.value);
          log("citiesList:", citiesList);
        }}
        placeholder={"Type a city"}
      ></Input>
      <div>
        {citiesList.length === 0
          ? null
          : citiesList.map((city) => (
              <City
                key={citiesList[city]}
                //   onClick={(e) => {
                //     setChosenCity(city);
                //   }}
              >
                <h1>{city.data.LocalizedName}</h1>
              </City>
            ))}
      </div>
    </>
  );
};
export default SearchBox;

const Input = styled.input``;
const City = styled.div`
  border: black solid 2px;
  height: 25px;
  width: 150px;
`;
