// 찜한 상품 , 최근 본 상품에 해당하는 컴포넌트입니다.
import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
// import Navbar from "./components/navbar";

import Likes from "./components/likes";
import Recent from "./components/recent";
const ContentContainer = styled.section`
  margin: 0 auto;
  nav {
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
  }
`;

const RecentLikes = () => {
  const [site, setSite] = useState(0);

  const onLink = React.useCallback((e) => {
    // e.preventDefault();
    const value = e.target.dataset.value;
    if (value === "0") {
      setSite(0);
    } else {
      setSite(1);
    }
  }, []);

  return (
    <ContentContainer>
      <nav>
        <NavLink
          to="/mypage/likes"
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
      </nav>
      <Routes>
        <Route path="/" element={<Likes />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </ContentContainer>
  );
};

export default React.memo(RecentLikes);
