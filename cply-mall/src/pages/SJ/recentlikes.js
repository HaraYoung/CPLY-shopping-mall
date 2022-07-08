// 찜한 상품 , 최근 본 상품에 해당하는 컴포넌트입니다.
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Navbar from "./components/navbar";
import Footer from "./Footer";
import styled from "styled-components";
import Likes from "./components/likes";
import Recent from "./components/recent";
const ContentContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

const RecentLikes = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Likes />} />
          <Route path="/recent" element={<Recent />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default React.memo(RecentLikes);
