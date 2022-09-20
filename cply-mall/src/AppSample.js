import React, { memo } from "react";
import Order from "./pages/SY/Order";
import Home from "./pages/GH/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/GH/Login";
import FindId from "./pages/GH/FindId";
import FindPw from "./pages/GH/FindPw";
import SignupCheck from "./pages/GH/SignupCheck";
import SignupInfo from "./pages/GH/SignupInfo";
import Cart from "./pages/SY/Cart";
import Header from "./pages/GH/Header";
import Footer from "./pages/GH/Footer";
import MyPage from "./pages/GH/MyPage";
import MemberPayment from "./pages/GH/MemberPayment";
import DetailGoods from "./pages/SJ/detailGoods";
import ServiceCenter from "./pages/GH/ServiceCenter";
const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route element={<Footer />}>
            <Route path="/login/*" element={<Login />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpw" element={<FindPw />} />
            <Route path="/signupcheck" element={<SignupCheck />} />
            <Route path="/signupinfo" element={<SignupInfo />} />
            <Route path="/" element={<Home />} exact={true} />
            <Route path='/servicecenter/*' element={<ServiceCenter/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/mypage/*" element={<MyPage />} />
            <Route path="/payment" element={<MemberPayment />} />
            <Route path="/detailGoods" element={<DetailGoods />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
});

export default App;
