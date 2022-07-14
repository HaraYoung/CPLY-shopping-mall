import React from 'react';
import styled from 'styled-components';
import MyPageMenu from './MyPageMenu';
import NewProduct from './NewProduct';
import Profile from './Profile';
import Withdraw from './Withdraw';
import ChangeInfo from './ChangeInfo';
import TodayPopularity from './TodayPopularity';
import Cart from '../SY/Cart';
import Order from '../SY/Order';
import OrderDetail from '../SY/OrderDetail';
import RandE from '../SY/RandE';
import PageNotFound from './PageNotFound';
import {Routes,Route} from 'react-router-dom'
const MyPageCss = styled.div`
    padding: 150px 0;
    display: flex;
    align-items: flex-start;
    .mypage-contents {
        width: 70%;
    }
`;

const MyPage = () => {
    return (
        <MyPageCss>
            <MyPageMenu/>
            <div className='mypage-contents'>
            {/* <Routes>
                <Route path='/' element={<NewProduct/>}/>
                <Route path='b' element={<TodayPopularity/>}/>
            </Routes> */}
            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='withdraw' element={<Withdraw/>}/>
                <Route path='changeinfo' element={<ChangeInfo/>}/>
                <Route path='order' element={<Order/>}/>
                <Route path='orderdetail' element={<OrderDetail/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='rande/*' element={<RandE/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            </div>
        </MyPageCss>
    );
};

export default MyPage;