// 찜한 상품 , 최근 본 상품에 해당하는 컴포넌트입니다.
import React from "react";

import Header from "./Header";
import Navbar from "./components/navbar";
import Footer from "./Footer";
import List from "./components/listItem";
import Side from "./components/side";
import styled from "styled-components";

const ContentContainer = styled.section``;

const RecentLikes = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContentContainer>
        <Side />
        <List />
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default React.memo(RecentLikes);
