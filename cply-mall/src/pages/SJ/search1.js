// 검색창에 원하는 검색어를 넣었을 때 나오는 결과
import React from "react";
import SearchTop from "./components/searchTop";
import MoreButtonList from "./components/moreButtonList";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Search1 = () => {
  return (
    <div>
      <Header />
      <SearchTop />
      <MoreButtonList />
      <Footer />
    </div>
  );
};

export default React.memo(Search1);
