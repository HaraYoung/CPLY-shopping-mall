import { Routes, Route } from "react-router-dom";
import NoticeContent from "./pages/YS/NoticeScreen/NoticeContent";
import NoticeMain from "./pages/YS/NoticeScreen/NoticeMain";
import FaqMain from "./pages/YS/FaqScreen/FaqMain";
import QnaMain from "./pages/YS/QnaScreen/QnaMain";

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
}

export default App;
