import React from "react";
import DetailTop from "./components/detailTop";
import Header from "./Header";
import DetailBottom from "./components/detailBottom";
import Footer from "./Footer";

const DetailGoods = () => {
  return (
    <div>
      <Header />
      <DetailTop />
      <DetailBottom />
      <Footer />
    </div>
  );
};

export default React.memo(DetailGoods);
