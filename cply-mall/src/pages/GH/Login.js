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
        /* .sign-css {
            margin-top: 50px;
            width: 100%;
            .signin-user-info {
                >input {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 15px;
                    font-size: 1em;
                    margin-bottom: 20px;
                    border-radius: 10px;
                    border: 1px solid #000;
                }
                >a {
                    text-decoration:none;
                    color:#bbb;
                    margin-right:10px;
                    font-size:15px;
                    &:hover {
                        color: #000;
                    }
                    }
                >button {
                    width: 100%;
                    font-size: 20px;
                    background-color: #e74c3c;
                    color: #fff;
                    padding: 10px 0;
                    border: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            }

        } */
        /* .not-member {
            .notmembers-user-info {
                margin-top: 50px;
                width: 100%;
                >input {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 15px;
                    font-size: 16px;
                    margin-bottom: 20px;
                    border-radius: 10px;
                    border: 1px solid #000;
                } 
                >button {
                    width: 100%;
                    font-size: 20px;
                    background-color: #e74c3c;
                    color: #fff;
                    padding: 10px 0;
                    border: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            }
        } */
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
                    <h1>?????????</h1>
                </div>
                {/* <div className='login-active-button'>
                    <button value='1' onClick={ChangeButton} className={changeLogin?'login-active':''}>??????</button>
                    <button value='0' onClick={ChangeButton} className={changeLogin?'':'login-active'}>?????????(????????????)</button>
                </div>
                {changeLogin ? (
                    <div className='sign-css'>
                        <form className='signin-user-info'>
                            <input type='text' placeholder='?????????' name='id'/>
                            <input type='text' placeholder='????????????' name='pw'/>
                            <Link to='/signupcheck'>????????????</Link>
                            <Link to='/findid'>????????? ??????</Link>
                            <Link to='/findpw'>???????????? ??????</Link>
                            <button type='submit'>?????????</button>
                        </form>
                    </div>
                ) : (
                    <div className='not-member'>
                        <form className='notmembers-user-info'>
                            <input type='text' placeholder='????????????' name='number'/>
                            <input type='text' placeholder='?????????' name='id'/>
                            <input type='text' placeholder='(-)??? ????????? ????????????' name='phone'/>
                            <button type='submit'>????????????</button>
                        </form>
                    </div>
                )} */}
                <nav>
                <NavLink to='/login/' className={changeLogin ? "effect" : ''}>??????</NavLink>
                <NavLink to='notmembers'>?????????(????????????)</NavLink>
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