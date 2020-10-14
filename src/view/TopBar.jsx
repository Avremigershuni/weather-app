import React from "react";
import styled from "styled-components";

import Links from "./Links";

const TopBar = () => {
  return (
    <Header>
      <H1>Herolo Weather app</H1>
      <LinksWrapper>
        <Links />
      </LinksWrapper>
    </Header>
  );
};
export default TopBar;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 90vw;
  padding: 20px;
  background-color: turquoise;
  border: solid 2px blue;
`;
const H1 = styled.h1``;
const LinksWrapper = styled.div``;
