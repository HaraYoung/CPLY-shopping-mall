import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  height: 3em;
  line-height: 2.8em;
  a {
    width: 50%;
    text-align: center;
    border-bottom: 0.1em solid lightgray;
  }
  .link {
    color: #ff204b;
    display: block;
    border-bottom: 5px solid #ff204b;
  }
`;

const Navbar = () => {
  const [site, setSite] = useState(0);

  const onLink = React.useCallback((e) => {
    e.preventDefault();
    const value = e.target.dataset.value;
    if (value === "0") {
      setSite(0);
    } else {
      setSite(1);
    }
  }, []);

  return (
    <Nav>
      <NavLink
        to="/likes/"
        className={site === 0 ? "link" : ""}
        onClick={onLink}
        data-value="0"
      >
        찜한 상품
      </NavLink>
      <NavLink
        to="recent"
        className={site === 1 ? "link" : ""}
        onClick={onLink}
        data-value="1"
      >
        최근 본 상품
      </NavLink>
    </Nav>
  );
};

export default Navbar;
