// 검색창에 원하는 검색어를 넣었을 때 나오는 결과
import React from "react";
import DateSearch from "./components/dateSearch";
import ReviewList from "./components/reviewList";
import styled from "styled-components";

const Review = styled.div`
  width: 1200px;
  margin: auto;
`;

const MyReview = () => {
  return (
    <Review>
      <DateSearch />
      <ReviewList />
    </Review>
  );
};

export default React.memo(MyReview);
