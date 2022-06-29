import NoticeMain from "./pages/YS/NoticeScreen/NoticeMain";
import { Routes, Route } from "react-router-dom";
import NoticeContent from "./pages/YS/NoticeScreen/NoticeContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NoticeMain />} />
        <Route path="/notice/:id" element={<NoticeContent />} />
      </Routes>
    </>
  );

}

export default App;
