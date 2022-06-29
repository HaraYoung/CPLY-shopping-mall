<<<<<<< HEAD
import React from 'react';


import NoticeMain from "./pages/YS/NoticeMain";
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import NoticeMain from "./pages/YS/NoticeScreen/NoticeMain";
>>>>>>> 071bfb7fc54ec5583cb6f1f38a089c0adf6c0401
import { Routes, Route } from "react-router-dom";
import NoticeContent from "./pages/YS/NoticeScreen/NoticeContent";
=======
import { Routes, Route } from "react-router-dom";
import NoticeContent from "./pages/YS/NoticeScreen/NoticeContent";
import NoticeMain from "./pages/YS/NoticeScreen/NoticeMain";
import FaqMain from "./pages/YS/FaqScreen/FaqMain";
import QnaMain from "./pages/YS/QnaScreen/QnaMain";
>>>>>>> cb9fc0ff9ebe30dfe0b4f05096ce18999aa858cb

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NoticeMain />} />
        <Route path="/notice/:id" element={<NoticeContent />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/qna" element={<QnaMain />} />
      </Routes>
    </>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cb9fc0ff9ebe30dfe0b4f05096ce18999aa858cb
>>>>>>> 851ae0e7ad58abe9a270b739fa62e2cf3e18b27a
>>>>>>> 071bfb7fc54ec5583cb6f1f38a089c0adf6c0401
}

export default React.memo(App);
