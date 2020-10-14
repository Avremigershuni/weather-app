import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <LinksWrapper>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </LinksWrapper>
  );
};
export default Links;
const LinksWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
`;
