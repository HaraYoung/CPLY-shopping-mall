import React, { memo } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import RegexHelper from '../../libs/RegexHelper';

const SigninCss = styled.div`
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

`;
const Signin = memo(() => {
    const SignInSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;
        
        try {
            RegexHelper.value(current.id,'아이디를 입력하세요');
            RegexHelper.value(current.pw,'비밀번호를 입력하세요');
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
        }
    },[])
    return (
        <SigninCss>
            <form className='signin-user-info' onSubmit={SignInSubmit}>
                <input type='text' placeholder='아이디' name='id'/>
                <input type='text' placeholder='비밀번호' name='pw'/>
                <Link to='/signupcheck'>회원가입</Link>
                <Link to='/findid'>아이디 찾기</Link>
                <Link to='/findpw'>비밀번호 찾기</Link>
                <button type='submit'>로그인</button>
            </form>
           
        </SigninCss>
    );
});

export default Signin;