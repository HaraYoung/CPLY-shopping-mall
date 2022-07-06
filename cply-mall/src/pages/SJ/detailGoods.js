import React from "react";
import DetailTop from "./components/detailTop";
import DetailBottom from "./components/detailBottom";
import styled from "styled-components";

const Detail = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const DetailGoods = () => {
  return (
    <Detail>
      <DetailTop />
      <DetailBottom />
    </Detail>
  );
};

export default React.memo(DetailGoods);
