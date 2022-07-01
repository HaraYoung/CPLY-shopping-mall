import React, { memo } from 'react';
import Order from './pages/SY/Order';
import Home from './pages/GH/Home';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/GH/Login';
import FindId from './pages/GH/FindId'
import FindPw from './pages/GH/FindPw'
import SignupCheck from './pages/GH/SignupCheck'
import SignupInfo from "./pages/GH/SignupInfo";
import NoticeMain from './pages/YS/NoticeScreen/NoticeMain';
import FaqMain from './pages/YS/FaqScreen/FaqMain';
import QnaMain from './pages/YS/QnaScreen/QnaMain';
import Cart from './pages/SY/Cart';
import Header from './pages/GH/Header';
import Footer from './pages/GH/Footer';


const App = memo(() => {
  return (
    <div>
            <Routes>
                <Route element={<Header/>}>
                <Route element={<Footer/>}>
                <Route path="/login/*" element={<Login/>}/>
                <Route path="/findid" element={<FindId/>}/>
                <Route path="/findpw" element={<FindPw/>}/>
                <Route path="/signupcheck" element={<SignupCheck/>}/>
                <Route path="/signupinfo" element={<SignupInfo/>}/>
                <Route path="/" element={<Home/>} exact={true}/>
                <Route path="/notice" element={<NoticeMain/>}/>
                <Route path="/faq" element={<FaqMain/>}/>
                <Route path="/Qna" element={<QnaMain/>}/>
                <Route path="/cart" element={<Cart/>}/>
                </Route>
                </Route>
            </Routes>

    </div>
  )
})

export default App