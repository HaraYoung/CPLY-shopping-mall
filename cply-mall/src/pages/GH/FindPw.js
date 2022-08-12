import React, { memo } from 'react';
import styled from 'styled-components';
import RegexHelper from '../../libs/RegexHelper';
import { useSelector, useDispatch } from "react-redux";
import { getFindInfo } from '../../slices/KH/UserSlice.js';
import { postSendMail } from '../../slices/KH/SendMailSlice';
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
import { Link } from 'react-router-dom';
const FindPwCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 5% 0;
    .findpw-box {
        padding: 50px 30px;
        border: 3px solid #ccc;
        margin: auto;
        width: 20%;
        height: auto;
        .findpw-box-title {
            text-align: center;
            >h1 {
                font-size: 36px;
                margin-top: 0;
                margin-bottom: 50px;
            }
            >p {
                font-size: 0.8em;
            }

        }
        >form {
            margin-top: 60px;
            >label {
                font-weight: bold;
            }
            >input {
                box-sizing: border-box;
                width: 100%;
                padding: 15px;
                font-size: 16px;
                margin: 20px 0;
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
    .find-pw-info{
        margin-top: 60px;
        text-align: center;
        >a {
            display: block;
            width: 100%;
            font-size: 20px;
            background-color: #e74c3c;
            color: #fff;
            padding: 10px 0;
            border: none;
            border-radius: 5px;
            margin-top: 50px;
        }
    }
`;

const FindPw = memo(() => {

    const [findPwState,setFindPwState] = React.useState({
        blo1:true,
        useremailstate:'',
        username:'',
    })
    const random = React.useCallback((n1,n2)=> {
        return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
    },[])

    //리덕스 초기화
    const dispatch = useDispatch()

    const {data,loading,error} = useSelector((state)=>state.user);

        //data 값을 감시하고 값이 참일때 로직을 수행
        React.useEffect(()=> {
            if (findPwState.blo1 === false) {
                if (data.rt === 200 ) {
                    const useremail = data.item.useremail
                    const split = useremail.split('@');
                    const length = split[0].length -5;
                    let substring = split[0].substring(0,5);
                    let content = '';

                    for (let i=0; i<length; i++) {
                        substring += "*";
                    }
                    for (let i=0; i<9;i++) {
                        content += random(0,9);
                    }
                    setFindPwState({
                        ...findPwState,
                        useremailstate:`${substring}@${split[1]}`
                    })
                    dispatch(postSendMail({
                        receiver_name:findPwState.username,
                        receiver_email:data.item.useremail,
                        content:content
                    }))
                } else if (data.rt === 500) {
                    window.alert('회원정보를 다시 확인하세요');
                    setFindPwState({
                        ...findPwState,
                        blo1:true
                    })
                }
            }
        },[data]);

    const FindPwSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;

        try {
            //이름 유효성 검사
            RegexHelper.value(current.username,'이름을 입력하세요');
            RegexHelper.minLength(current.username,2,'이름을 다시 확인하세요');
            RegexHelper.maxLength(current.username,20,'이름를 다시 확인하세요');

            //아이디 유효성 검사
            RegexHelper.value(current.userid,'아이디를 입력하세요');
            RegexHelper.minLength(current.userid,8,'아이디를 다시 확인하세요');
            RegexHelper.maxLength(current.userid,20,'아이디를 다시 확인하세요');
            RegexHelper.engNum(current.userid,'아이디를 다시 확인하세요');

            //전화번호 유효성 검사
            RegexHelper.value(current.phone,'전화번호를 입력하세요');
            RegexHelper.num(current.phone,'전화번호는 숫자만 입력 가능합니다');
            RegexHelper.minLength(current.phone,10,'전화번호는 10자 이상부터 입력 가능합니다');
            RegexHelper.maxLength(current.phone,11,'전화번호는 11자 까지 입력 가능합니다');
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }
        dispatch(getFindInfo({
            phone:current.phone.value,
            username:current.username.value,
            userid:current.userid.value
        }))
        setFindPwState({
            ...findPwState,
            blo1:false,
            username:current.username.value
        })
    },[dispatch,findPwState])
    return (
        <FindPwCss>
            <div className='findpw-box'>
                <div className='findpw-box-title'>
                    <h1>비밀번호 찾기</h1>
                    <p>가입시 등록한 아이디와 전화번호를 입력하시면<br/>가입시 입력한 이메일로 임시 비밀번호를 전송해 드립니다</p>
                </div>
                {findPwState.blo1 ? (
                    <>
                        <form onSubmit={FindPwSubmit}>
                            <label htmlFor='username'>
                                가입시 등록한 이름
                            </label>
                            <input name='username' placeholder='이름'/>
                            <label htmlFor='userid'>
                                가입시 등록한 아이디
                            </label>
                            <input name='userid' placeholder='아이디'></input>
                            <label htmlFor='phone'>
                                가입시 등록한 전화번호
                            </label>
                            <input name='phone' placeholder='(-)를 제외한 전화번호'></input>
                            <button type='submit'>아이디 찾기</button>
                        </form>
                    </>
                ):(
                    <>
                    <Spinner visible={loading}/>
                    {error ? (
                        <ErrorView error={error}/>
                    ):(
                        data && (
                            <div className='find-pw-info'>
                                <h3>이메일 주소 : {findPwState.useremailstate}</h3>
                                <Link to='/login'>로그인 페이지</Link>
                            </div>
                        )
                    )}
                    </>
                )}
            </div>
        </FindPwCss>
    );
});

export default FindPw;