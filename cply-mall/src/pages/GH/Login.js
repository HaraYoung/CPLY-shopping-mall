import React, { memo } from 'react';
import styled from 'styled-components';
import {Link,Routes,Route} from 'react-router-dom';
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
        /* >nav {
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
        } */
        .sign-css {
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

        }
        .not-member {
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
        }
    }
`;
const Login = memo(() => {
    const [changeLogin,setChangeLogin] = React.useState(true);

    const ChangeButton = React.useCallback((e)=> {
        if (e.target.value > 0) {
            setChangeLogin(true)
        }else {
            setChangeLogin(false)
        }
    },[setChangeLogin])
    return (
        <LoginCss>
            <div className='login-box'>
                <div className='login-box-title'>
                    <h1>로그인</h1>
                </div>
                <div className='login-active-button'>
                    <button value='1' onClick={ChangeButton} className={changeLogin?'login-active':''}>회원</button>
                    <button value='0' onClick={ChangeButton} className={changeLogin?'':'login-active'}>비회원(주문조회)</button>
                </div>
                {changeLogin ? (
                    <div className='sign-css'>
                        <form className='signin-user-info'>
                            <input type='text' placeholder='아이디' name='id'/>
                            <input type='text' placeholder='비밀번호' name='pw'/>
                            <Link to='/signupcheck'>회원가입</Link>
                            <Link to='/findid'>아이디 찾기</Link>
                            <Link to='/findpw'>비밀번호 찾기</Link>
                            <button type='submit'>로그인</button>
                        </form>
                    </div>
                ) : (
                    <div className='not-member'>
                        <form className='notmembers-user-info'>
                            <input type='text' placeholder='주문번호' name='number'/>
                            <input type='text' placeholder='아이디' name='id'/>
                            <input type='text' placeholder='(-)를 제외한 전화번호' name='phone'/>
                            <button type='submit'>주문조회</button>
                        </form>
                    </div>
                )}
            </div>
        </LoginCss>
    );
});

export default Login;