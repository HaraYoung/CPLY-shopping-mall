import React, { memo } from 'react';
import styled from 'styled-components';
import RegexHelper from '../../libs/RegexHelper.js';
import { useSelector, useDispatch } from "react-redux";
import { getFindInfo } from '../../slices/KH/UserSlice.js';
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
import { Link } from 'react-router-dom';
const FindIdCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 5% 0;
    .findid-box {
        padding: 50px 30px;
        border: 3px solid #ccc;
        margin: auto;
        width: 20%;
        height: auto;
        .findid-box-title {
            text-align: center;
            >h1 {
                font-size: 36px;
                margin-top: 0;
                margin-bottom: 50px;
            }
            >p {
                font-size: 13px;
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
                margin-top: 50px;
            }
        }
    }
    .findid-id-info {
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

const FindId = memo(() => {


    const [findIdState,setFindIdState] = React.useState({
        blo1:true,
        useridstate:""
    })
    //리덕스 초기화
    const dispatch = useDispatch()

    const {data,loading,error} = useSelector((state)=>state.user);


    //data 값을 감시하고 값이 참일때 로직을 수행
    React.useEffect(()=> {
        if (findIdState.blo1 === false) {
            if (data.rt === 200 ) {
                const userid = data.item.userid
                const length = userid.length -5;
                let substring = userid.substring(0,5);
                
                for (let i=0; i<length; i++) {
                    substring += "*";
                }
                setFindIdState({
                    ...findIdState,
                    useridstate:substring
                })
            } else if (data.rt === 500) {
                window.alert('회원정보를 다시 확인하세요');
                setFindIdState({
                    ...findIdState,
                    blo1:true
                })
            }
        }
    },[data]);

    const FindIdSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;

        try {
            //이름 유효성 검사
            RegexHelper.value(current.username,'이름을 입력하세요');
            RegexHelper.minLength(current.username,2,'이름을 다시 확인하세요');
            RegexHelper.maxLength(current.username,20,'이름를 다시 확인하세요');

            //전화번호 유효성
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
            username:current.username.value
        }))
        setFindIdState({
            ...findIdState,
            blo1:false,
        })
    },[dispatch,findIdState])
    return (
        <FindIdCss>
            <div className='findid-box'>
                <div className='findid-box-title'>
                    <h1>아이디 찾기</h1>
                    <p>가입시 등록한 전화번호를 입력하시면<br/>아이디의 일부를 알려드립니다</p>
                </div>
                {findIdState.blo1 ? (
                    <>                    
                        <form onSubmit={FindIdSubmit}>
                            <label htmlFor='username'>
                                가입시 등록한 이름
                            </label>
                            <input name='username' placeholder='이름'/>
                            <label htmlFor='phone'>
                                가입시 등록한 전화번호
                            </label>
                            <input name='phone' placeholder='(-)를 제외한 전화번호'/>
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
                            <div className='findid-id-info'>
                                <h3>아이디 : {findIdState.useridstate}</h3>
                                <Link to='/login'>로그인 페이지</Link>
                            </div>
                        )
                    )}
                    </>
                )}
            </div>
        </FindIdCss>
    );
});

export default FindId;