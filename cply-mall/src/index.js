import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/**/
import App from './AppSample';
/*/
import App from './App';
/**/
import Meta from "./Meta";
// 전역 스타일 정의
import GlobalStyles from "./GlobalStyles";
/* 리덕스 구성을 위한 참조 */
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Meta />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
