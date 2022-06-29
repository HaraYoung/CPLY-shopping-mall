import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import Meta from "./Meta";
// 전역 스타일 정의
import GlobalStyles from "./GlobalStyles";

/* 리덕스 구성을 위한 참조 */
import { Provider } from "react-redux";
import store from "./store/store";

=======

>>>>>>> 851ae0e7ad58abe9a270b739fa62e2cf3e18b27a
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Meta />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
