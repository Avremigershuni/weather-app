import React, { createContext, useState } from "react";

const WeatherInfo = createContext();
const { Provider } = WeatherInfo;

const WeatherProvider = ({ children }) => {
  const [favoritesCities, setFavoritesCities] = useState([
    { city: "Tel-aviv", temp: "25" },
    { city: "Jerusalem", temp: "28" },
    { city: "Petah-tikva", temp: "35" },
    { city: "New-york", temp: "38" },
    { city: "Phnom penh", temp: "45" },
  ]);
  const [chosenCity, setChosenCity] = useState({
    city: "Jerusalem",
    temp: "28",
  });
  const [result, setResult] = useState();
  const [baseUrl, setBaseUrl] = useState(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=D8KANthGfByTB8pAjX9Av8wBFi6ddHNr&`
  );
  const state = { favoritesCities, chosenCity, result, baseUrl };
  const actions = { setFavoritesCities, setChosenCity, setResult };
  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};
export { WeatherProvider, WeatherInfo };
