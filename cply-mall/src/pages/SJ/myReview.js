// 검색창에 원하는 검색어를 넣었을 때 나오는 결과
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DateSearch from "./components/dateSearch";
import ReviewList from "./components/reviewList";
import styled from "styled-components";

const ContentContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

const MyReview = () => {
  return (
    <ContentContainer>
      <Header />
      <DateSearch />
      <ReviewList />
      <Footer />
    </ContentContainer>
  );
};

export default React.memo(MyReview);
