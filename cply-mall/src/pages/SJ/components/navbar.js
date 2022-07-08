import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  height: 3em;
  line-height: 2.8em;
  border-bottom: 0.1em solid lightgray;
`;

const navbar = () => {
  return (
    <Nav>
      <NavLink to="/likes/" className="link">
        찜한 상품
      </NavLink>
      <NavLink to="recent" className="link">
        최근 본 상품
      </NavLink>
    </Nav>
  );
};

export default navbar;
