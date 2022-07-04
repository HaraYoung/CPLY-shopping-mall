import React from "react";
import DetailTop from "./components/detailTop";
import Header from "./Header";
import DetailBottom from "./components/detailBottom";
import Footer from "./Footer";
import styled from "styled-components";

const Detail = styled.div`
  .content {
    width: 1200px;
    margin: 0 auto;
  }
`;

const DetailGoods = () => {
  return (
    <Detail>
      <Header />
      <div className="content">
        <DetailTop />
        <DetailBottom />
      </div>
      <Footer />
    </Detail>
  );
};

export default React.memo(DetailGoods);
