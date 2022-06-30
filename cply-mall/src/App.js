import React, { memo } from 'react';
import Order from './pages/SY/Order';
// import Home from './pages/GH/Home';
// import {Routes,Route} from 'react-router-dom';
// import Login from './pages/GH/Login';
// import FindId from './pages/GH/FindId'
// import FindPw from './pages/GH/FindPw'
// import SignupCheck from './pages/GH/SignupCheck'
// import SignupInfo from "./pages/GH/SignupInfo";
// import NoticeMain from './pages/YS/NoticeScreen/NoticeMain';
// import FaqMain from './pages/YS/FaqScreen/FaqMain';
// import QnaMain from './pages/YS/QnaScreen/QnaMain';
// import Cart from './pages/SY/Cart';


const App = memo(() => {
  return (
    <div>
            {/* <Routes>
                <Route path="/login/*" element={<Login/>}/>
                <Route path="/" element={<Home/>} exapt={true}/>
                <Route path="/findid" element={<FindId/>}/>
                <Route path="/findpw" element={<FindPw/>}/>
                <Route path="/signupcheck" element={<SignupCheck/>}/>
                <Route path="/signupinfo" element={<SignupInfo/>}/>
                <Route path="/notice" element={<NoticeMain/>}/>
                <Route path="/faq" element={<FaqMain/>}/>
                <Route path="/Qna" element={<QnaMain/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes> */}

            <Order/>
    </div>
  )
})

export default App