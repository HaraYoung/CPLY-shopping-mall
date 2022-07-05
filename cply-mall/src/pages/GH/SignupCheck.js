import React, { memo } from 'react';
import styled from 'styled-components';
import RegexHelper from '../../libs/RegexHelper';

const SignupCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5% 0;
    .signup-check-box{
        margin: auto;
        width: 30%;
        >h1 {
            text-align: center;
            font-size: 40px;
        }
        .signup-check-box-margin {
            width: 100%;
            border-top: 3px solid #ccc;
            border-bottom: 3px solid #ccc;
            >form {
                padding: 40px 0;
                width: 100%;
                >label {
                    display: block;
                    font-size: 1.2rem;
                    font-weight: bold;
                    >input {
                        vertical-align: middle;
                        width: 25px;
                        height: 25px;
                        margin-right:30px ;
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
            }
        }
    }
`;

const Signup = memo(() => {
    
    const SignupCheckSubmit = React.useCallback((e)=> {
        e.preventDefault();
        console.log (e.target.check1.value)
        
        const current = e.target;
        try {
            RegexHelper.check(current.check1,'필수항목 동의가 필요합니다');
        }catch(e) {
            window.alert(e.message);

        }
    },[])

    return (
        <SignupCss>
            <div className='signup-check-box'>
                <h1>C P L Y</h1>
                <div className='signup-check-box-margin'>
                    <form onSubmit={SignupCheckSubmit}>
                        <label htmlFor='check1' >
                            <input type='checkbox' name='check1'/>
                            약관 전체 동의하기
                        </label>
                        <label htmlFor='check2'>
                            <input type='checkbox' name='check2'/>
                            [필수] 개인정보 수집 및 이용동의
                        </label>
                        <label htmlFor='check3'>
                            <input type='checkbox' name='check3'/>
                            [필수] CPLY 이용약관 동의
                        </label>
                        <label htmlFor='check4'>
                            <input type='checkbox' name='check4'/>
                            [필수] 만 14세 미만 가입 제한
                        </label>
                        <button type='submit'>가입하기</button>
                    </form>
                </div>
            </div>
        </SignupCss>
    );
});

export default Signup;