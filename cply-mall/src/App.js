<<<<<<< HEAD
import React from 'react';

function App() {
  return (
    <div>
    </div>
  )
=======
import NoticeMain from "./pages/YS/NoticeMain";
import { Routes, Route } from "react-router-dom";
import NoticeContent from "./pages/YS/NoticeContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NoticeMain />} />
        <Route path="/notice/:id" element={<NoticeContent />} />
      </Routes>
    </>
  );
>>>>>>> ce779b27b226730ff7584bdc99ba6a82c08e18b7
}

export default App;
