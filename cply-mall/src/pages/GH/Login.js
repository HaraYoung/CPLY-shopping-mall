import React, { memo } from 'react';
import styled from 'styled-components';
import {NavLink,Routes,Route} from 'react-router-dom';
import Signin from './Signin';
import NotMembers from './NotMembers';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const LoginCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 5% 0;    
    .login-box {
        padding: 50px 30px;
        border: 3px solid #ccc;
        margin: auto;
        width: 20%;
        height: auto;
        .login-box-title {
            text-align: center;
            >h1 {
                font-size: 36px;
                margin-top: 0;
                margin-bottom: 50px;
            }
        }
        .login-active-button {
            >button {
                text-decoration: none;
                margin-right: 10px;
                color: #000;
                font-size: 15px;
                font-weight: bold;
                border: none;
                background: none;
                &.login-active {
                    color: #e74c3c;
                    padding-bottom: 3px;
                    border-bottom: 3px solid #e74c3c;
                }
            }
        }
        >nav {
            >a {
                text-decoration: none;
                margin-right: 10px;
                color: #000;
                font-weight: bold;               
                &.active {
                    color: #e74c3c;
                    padding-bottom: 3px;
                    border-bottom: 3px solid #e74c3c;
                }
                &:hover {
                    color: #e74c3c;
                    padding-bottom: 3px;
                    border-bottom: 3px solid #e74c3c;
                    transition: all 0.2s ease;
                }
            }
        }
        .effect {
            color: #e74c3c;
            padding-bottom: 3px;
            border-bottom: 3px solid #e74c3c;
        }
    }
`;
const Login = memo(() => {
    const [changeLogin,setChangeLogin] = React.useState(true);


    const params = useParams();

    React.useEffect(()=> {
        if (params['*'] === "") {
            setChangeLogin(true);
            console.log (changeLogin)
            console.log (params)
        }else {
            setChangeLogin(false);
            console.log (changeLogin)
            console.log (params)
        }
    },[params,changeLogin]);

    
    return (
        <LoginCss>
            <div className='login-box'>
                <div className='login-box-title'>
                    <h1>로그인</h1>
                </div>
                <nav>
                <NavLink to='/login/' className={changeLogin ? "effect" : ''}>회원</NavLink>
                <NavLink to='notmembers'>비회원(주문조회)</NavLink>
                </nav>

                <Routes>
                    <Route path='/' element={<Signin/>}/>
                    <Route path='/notmembers' element={<NotMembers/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </LoginCss>
    );
});

export default Login;