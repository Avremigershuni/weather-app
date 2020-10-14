import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherInfo } from "../data/StateManager";

const Favorites = () => {
  const {
    favoritesCities,
    setFavoritesCities,
    setChosenCity,
  } = useContext(WeatherInfo);
  const removeCityFromFavoritesList = () => {
    setFavoritesCities(
      favoritesCities.filter((city) => {
        return city.city !== city.city;
      })
    );
    console.log(favoritesCities);
  };
  return (
    <Wrapper>
      {favoritesCities.map((city) => (
        <FavoriteCity
          key={favoritesCities[city]}
          onClick={(e) => {
            setChosenCity(city);
          }}
        >
          <RemoveButton
            onClick={() => {
              removeCityFromFavoritesList();
            }}
          >
            Remove from favorites
          </RemoveButton>
          <h1>{city.city}</h1>
          <h2>{city.temp}</h2>
        </FavoriteCity>
      ))}
    </Wrapper>
  );
};
export default Favorites;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const FavoriteCity = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid black;
  margin: 15px;
  cursor: pointer;
`;
const RemoveButton = styled.button`
  cursor: pointer;
`;
