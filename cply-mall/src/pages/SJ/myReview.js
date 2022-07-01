// 검색창에 원하는 검색어를 넣었을 때 나오는 결과
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DateSearch from "./components/dateSearch";
import ReviewList from "./components/reviewList";
import styled from "styled-components";

const MyReview = () => {
  return (
    <div>
      <Header />
      <DateSearch />
      <ReviewList />
      <Footer />
    </div>
  );
};

export default React.memo(MyReview);
