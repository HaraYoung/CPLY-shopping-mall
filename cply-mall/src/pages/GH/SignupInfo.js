import React, { memo } from 'react';
import styled from 'styled-components';

const SignupInfoCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .signup-info-box{
        margin: auto;
        width: 30%;
        >h1 {
            text-align: center;
            font-size: 40px;
        }
        .signup-info-box-margin {
            width: 100%;
            border-top: 3px solid #ccc;
            border-bottom: 3px solid #ccc;
            >form {
                padding: 40px 0;
                width: 100%;
                position: relative;
                >label {
                    display: block;
                    font-size: 23px;
                    font-weight: bold;
                    margin-bottom: 50px;
                    position: relative;
                    &:last-of-type {
                        margin-bottom: 20px;
                    }
                    >span {
                        color: #e74c3c;
                    }
                    >input {
                        width: 40%;
                        padding: 10px 10px;
                        vertical-align: middle;                                                
                        border-radius: 5px;
                        position: absolute;
                        right: 0;
                        transform: translate(-50%,-10%);
                        font-size: 16px;
                    }
                    >.info-check-box {
                        position: absolute;
                        left: 0;
                        top: 0;
                        transform: translate(220%,0);
                        >input {
                            width: 25px;
                            height: 25px;
                            vertical-align: middle;
                        }
                        >span {
                            font-size: 16px;
                            margin-left: 5px;
                        }
                    }
                    >button {
                        font-size: 16px;
                        padding: 10px 12px;
                        color: #fff;
                        background-color: #e74c3c;
                        border-radius: 5px;
                        border: none;
                        position: absolute;
                        right: 0;
                        transform: translate(0,-10%);
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
                    margin-top: 40px;
                }
                >div {
                    position: relative;
                    right: 0;
                    width: 100%;
                    bottom: 0;
                    transform: translate(33.5%,0);                   
                    >input {
                        display: block;
                        width: 61%;
                        padding: 12px;
                        border-radius: 5px;
                        margin-bottom: 20px;
                    }
                }
                
            }
        }
    }
`;
const SignupInfo = memo(() => {
    return (
        <SignupInfoCss>
            <div className='signup-info-box'>
                <h1>C P L Y</h1>
                <div className='signup-info-box-margin'>
                    <form>
                        <label htmlFor='id' >
                            아이디<span>*</span>
                            <input type='text' name='id' placeholder='아이디를 입력해 주세요'/>
                            <button>중복확인</button>
                        </label>
                        <label htmlFor='pw' >
                            비밀번호<span>*</span>
                            <input type='text' name='pw' placeholder='비밀번호를 입력해 주세요'/>
                        </label>
                        <label htmlFor='pw-re' >
                            비밀번호 확인<span>*</span>
                            <input type='text' name='pw-re'/>
                        </label>
                        <label htmlFor='name' >
                            이름<span>*</span>
                            <input type='text' name='name' placeholder='이름을 입력해 주세요'/>
                        </label>
                        <label htmlFor='phone' >
                            전화번호<span>*</span>
                            <input type='text' name='phone' placeholder='(-)를 제외한 전화번호'/>
                        </label>
                        <label htmlFor='sns-check' >
                            SNS 수신여부                            
                            <div className='info-check-box'>
                            <input type='checkbox' name='sns-check'/>
                            <span>동의함</span>
                            </div>
                        </label>
                        <label htmlFor='email' >
                            이메일<span>*</span>
                            <input type='text' name='email' placeholder='이메일을 입력해주세요'/>
                        </label>
                        <label htmlFor='email-check' >
                            이메일 수신여부
                            <div className='info-check-box'>
                            <input type='checkbox' name='email-check'/>
                            <span>동의함</span>
                            </div>
                        </label>
                        <label htmlFor='addr'>
                            주소<span>*</span>
                            <input type='text' name='addr' placeholder='우편번호'/>                        
                            <button>주소검색</button>                            
                        </label>
                        <div>
                            <input type='text' name='add1' placeholder='우편번호'/>                        
                            <input type='text' name='addr2' placeholder='우편번호'/>                        
                        </div>
                        <button type='submit'>가입하기</button>
                    </form>
                </div>
            </div>
        </SignupInfoCss>
    );
});

export default SignupInfo;