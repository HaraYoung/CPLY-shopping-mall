// 찜한 상품 , 최근 본 상품에 해당하는 컴포넌트입니다.
import React from "react";

import Navbar from "./components/navbar";
import List from "./components/listItem";
import Side from "./components/side";
import styled from "styled-components";

const ContentContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

const RecentLikes = () => {
  return (
    <div>
      <ContentContainer>
        <Navbar />
        <Side />
        <List />
      </ContentContainer>
    </div>
  );
};

export default React.memo(RecentLikes);
