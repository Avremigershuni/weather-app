import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherInfo } from "../data/StateManager";

const WeatherWindow = () => {
  const { chosenCity, favoritesCities, setFavoritesCities } = useContext(
    WeatherInfo
  );
  // const favListAdder = ()=>{
  //   for(let i=0;i < favoritesCities.length; i++){
  //     if(!chosenCity.city){
  //       setFavoritesCities([...favoritesCities, chosenCity])
  //     }
  //   }
  // }
  return (
    <Wrapper>
      <Top>
        <CurrentCity>
          <CityName>{chosenCity.city}</CityName>
          <Temp>{chosenCity.temp}</Temp>
        </CurrentCity>
        <ButtonBox>
          <AddToFavButton
            onClick={() => {
              setFavoritesCities([...favoritesCities, chosenCity]);
            }}
          >
            Add to favorites
          </AddToFavButton>
        </ButtonBox>
      </Top>
      <Center>temp</Center>
      <Footer>
        <Daily>day 1</Daily>
        <Daily>day 2</Daily>
        <Daily>day 3</Daily>
        <Daily>day 4</Daily>
        <Daily>day 5</Daily>
      </Footer>
    </Wrapper>
  );
};
export default WeatherWindow;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  min-height: 350px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid blue;
  width: 100%;
  height: 20%;
`;
const CurrentCity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
`;
const CityName = styled.div``;
const Temp = styled.div``;
const ButtonBox = styled.div``;
const AddToFavButton = styled.button`
  cursor: pointer;
`;
const Center = styled.div`
  border: 2px solid red;
  width: 100%;
  height: 80% ;
`;
const Footer = styled.div``;
const Daily = styled.div``;
