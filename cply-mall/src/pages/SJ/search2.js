// 카테고리에서 링크 클릭 후 반환되는 검색결과
import React from "react";
import SearchTop2 from "./components/searchTop2";
import MoreButtonList from "./components/moreButtonList";
import SideCategorye from "./components/sideCategorye";
import styled from "styled-components";
const SearchContainer = styled.section`
  width: 1200px;
  margin: auto;
  display: flex;
  padding: 4em 1em;
  .rightSide {
    width: 80%;
  }
`;

const Search2 = () => {
  return (
    <div>
      <SearchContainer>
        <SideCategorye />
        <div className="rightSide">
          <SearchTop2 />
          <MoreButtonList />
        </div>
      </SearchContainer>
    </div>
  );
};

export default React.memo(Search2);
