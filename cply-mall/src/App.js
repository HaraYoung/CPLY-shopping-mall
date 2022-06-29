import React from "react";
import DetailGoods from "./pages/SJ/detailGoods";
import Header from "./pages/components/header";

function App() {
  return (
    <div>
      <Header />
      <DetailGoods />
    </div>
  );
}

export default React.memo(App);
