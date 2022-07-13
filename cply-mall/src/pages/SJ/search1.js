// 검색창에 원하는 검색어를 넣었을 때 나오는 결과
import React from "react";
import SearchTop from "./components/searchTop";
import MoreButtonList from "./components/moreButtonList";
import styled from "styled-components";

const QuerySearch = styled.div`
  width: 1200px;
  margin: auto;
`;

const Search1 = () => {
  return (
    <QuerySearch>
      <SearchTop />
      <MoreButtonList />
    </QuerySearch>
  );
};

export default React.memo(Search1);
