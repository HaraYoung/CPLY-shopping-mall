// 카테고리에서 링크 클릭 후 반환되는 검색결과
import React from "react";
import SearchTop from "./components/searchTop";
import MoreButtonList from "./components/moreButtonList";
import Header from "./Header";
import Footer from "./Footer";
import SideCategorye from "./components/sideCategorye";
import styled from "styled-components";
const SearchContainer = styled.section``;

const Search2 = () => {
  return (
    <div>
      <Header />
      <SearchTop />
      <SearchContainer>
        <SideCategorye />
        <MoreButtonList />
      </SearchContainer>
      <Footer />
    </div>
  );
};

export default React.memo(Search2);
