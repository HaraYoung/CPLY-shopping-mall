import React, { memo } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import RegexHelper from '../../libs/RegexHelper';
import { useSelector, useDispatch } from "react-redux";
import { getUserItem } from '../../slices/KH/UserSlice';
import { postSession } from '../../slices/KH/SessionSlice';
import { useNavigate } from 'react-router-dom';

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
    const [signInState,setSignInState] = React.useState({
        blo:false,
        userid:'',
        userpw:'',
    })

    const navigate = useNavigate();

    //리덕스 초기화
    const dispatch = useDispatch();

    const {data,loading,error} = useSelector((state)=> state.user);



    React.useEffect(()=> {
        if (signInState.blo) {
            if (data.rt ===200) {
                dispatch(postSession({
                    userid:signInState.userid,
                    userpw:signInState.userpw
                }))
                navigate('/');
            }else if (data.rt ===500) {
                window.alert('아이디,비밀번호를 다시 확인하세요')
                setSignInState({
                    ...signInState,
                    blo:false
                })
                return;
            }
        }
    },[data])

    const SignInSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;
        
        try {
            RegexHelper.value(current.id,'아이디를 입력하세요');
            RegexHelper.value(current.pw,'비밀번호를 입력하세요');
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }
        dispatch(getUserItem({
            userid:current.id.value,
            userpw:current.pw.value
        }))
        setSignInState({
            ...signInState,
            blo:true,
            userid:current.id.value,
            userpw:current.pw.value
        })
    },[dispatch,signInState])
    return (
        <SigninCss>
            <form className='signin-user-info' onSubmit={SignInSubmit}>
                <input type='text' placeholder='아이디' name='id'/>
                <input type='password' placeholder='비밀번호' name='pw'/>
                <Link to='/signupcheck'>회원가입</Link>
                <Link to='/findid'>아이디 찾기</Link>
                <Link to='/findpw'>비밀번호 찾기</Link>
                <button type='submit'>로그인</button>
            </form>
           
        </SigninCss>
    );
});

export default Signin;