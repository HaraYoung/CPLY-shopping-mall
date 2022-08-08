import React, { memo } from 'react';
import styled from 'styled-components';
import RegexHelper from '../../libs/RegexHelper';
import { useNavigate } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';
import { useSelector, useDispatch } from "react-redux";
import { getUserItem,postUserItem,postItem } from '../../slices/KH/UserSlice';
import { postSession } from '../../slices/KH/SessionSlice';
import dayjs from 'dayjs';
const SignupInfoCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5% 0;
    position: relative;
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
                display: flex;
                flex-direction: column;
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
                .signup-info-div-box {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 4%;
                    .signup-info-div1 {
                        display: flex;
                        width: 25%;
                        >h2 {
                            margin: 0;  
                            font-size: 1.4em;
                            >span {
                                color: #e74c3c;
                            }
                        }
                    }
                    .signup-info-div2 {
                        width: 45%;
                        height: 100%;
                        input {
                            padding: 3%;
                            width: 100%;
                            font-size: 1em;
                            border-radius: 5px;
                            &.signup-info-check {
                                vertical-align: top;
                                margin-left: 2%;
                                width: auto;
                                width: 20px;
                                height: 20px;
                            }
                        }
                    }
                    .signup-info-div3 {
                        width: 20%;
                        text-align: center;
                        >button {
                            background: #e74c3c;
                            border: none;
                            font-size: 0.9em;
                            margin: 0;
                            margin: auto;
                            display: block;
                            padding: 8px 8px;
                            color: #fff;
                            border-radius: 5px;
                        }
                        >span {
                            background: #e74c3c;
                            border: none;
                            font-size: 0.9em;
                            margin: 0;
                            margin: auto;
                            
                            padding: 8px 8px;
                            color: #fff;
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
    }
    .signup-modal {
        width: 420px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        border: 1px solid #aaa;
        &.modalNone {
            display: none;
        }
        .title-box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px;
            h2 {
                margin: 0;
            }
            >img {
                width: 20px;
                height: 20px;
            }
        }
        .juso-box {
            background: #ececec;
            padding: 10px;
            .juso-box-div {
            padding: 10px;
            background-color: #fff;
            span {
                width: 40%;
                border: 1px solid #34b4eb;
                color: #34b4eb;
                font-size: 11px;
                padding: 2px 4px;
                margin-right: 5px;
                
            }
            >div {
                width: 100%;
                margin: 30px 0;
                input {
                    width: 60%;
                    border-radius:5px;
                    margin-right: 5px;
                    padding: 5px 10px;
                }
                button {
                    color: #fff;
                    background: #000;
                    border-radius: 5px;
                    padding: 5px 20px;
                }
            }
        }
    }
    }
`;
const SignupInfo = memo(() => {
    const navigate = useNavigate();
    //id input Ref
    const mega = React.useRef();
    //나머지 주소 Ref
    const inputRef = React.useRef();
    //중복검사 상태값
    const [overlap,setOverlap] = React.useState({
        blo:false,
        data:''
    });
    //주소정보 상태값
    const [daumJuso,setDaumJuso] = React.useState({
        addr:'',
        addr2:'',
        zonecode:'',
        blo:false
    })
    //modal box 상태값
    const [modalBox,setModalBox] = React.useState(false)

    //리덕스초기화
    const {data,loading,error} = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    
    
    const [CompleteState,setCompleteState] = React.useState({
        complete:false,
        idcheck:false,
        userid:'',
        userpw:'',
    }) 

    React.useEffect(()=> {
        if (CompleteState.complete) {
            if (data.rt === 200 && window.confirm('입력하신 내용으로 정보가 저장됩니다.계속하시겠습니까?')) {
                window.alert('회원가입이 완료되었습니다.');
                dispatch(postSession({
                    userid:CompleteState.userid,
                    userpw:CompleteState.userpw
                }))
                navigate('/');
            }else if (data.rt === 490) {
                window.alert(error)
                setCompleteState({
                    ...CompleteState,
                    complete:false
                })
            }
        }

    },[data,CompleteState,error,navigate,dispatch])
    //가입하기버튼 submit
    const SignupInfoSubmit = React.useCallback((e)=> {
        e.preventDefault();
        
        const current = e.target;
        const enum1 = current.snsRCPT.checked ? 'Y' : 'N';
        const enum2 = current.emailRCPT.checked ? 'Y' : 'N';

        try {
            //중복검사 유효성
            if (!overlap.blo || overlap.data !== current.userid.value) {
                window.alert('아이디 중복검사를 실행하세요');
                setOverlap({
                    blo:false,
                    data:''
                })
                return;
            }

            
            //비밀번호 유효성
            /**
             * 특수문자유효성추가해야함
             **/
            RegexHelper.value(current.userpw,'비밀번호는 필수 정보입니다');
            RegexHelper.minLength(current.userpw,8,'비밀번호는 8글자 이상만 입력 가능합니다');
            RegexHelper.maxLength(current.userpw,20,'비밀번호는 최대 20글자 까지 입력 가능합니다');
            //비밀번호 확인
            RegexHelper.value(current.userpwre,'비밀번호 확인은 필수 정보입니다');
            RegexHelper.value(current.userpw,current.userpwre,'비밀번호가 일치하지 않습니다');
            //이름 유효성
            RegexHelper.value(current.username,'이름은 필수 정보입니다');
            RegexHelper.minLength(current.username,2,'이름은 2글자 이상 부터 입력 가능합니다');
            RegexHelper.maxLength(current.username,20,'이름은 최대 20글자 까지 입력 가능합니다');
            RegexHelper.korEng(current.username,'이름은 한글,영문만 입력 가능합니다');
            //전화번호 유효성
            RegexHelper.value(current.phone,'전화번호는 필수 정보입니다');
            RegexHelper.num(current.phone,'전화번호는 숫자만 입력 가능합니다');
            RegexHelper.minLength(current.phone,10,'전화번호는 10자 부터 입력 가능합니다');
            RegexHelper.maxLength(current.phone,11,'전화번호는 11자 까지만 입력 가능합니다');
            //이메일 유효성
            RegexHelper.value(current.useremail,'이메일은 필수 정보입니다');
            RegexHelper.email(current.useremail,'이메일 형식에 맞지않습니다');
            //주소 유효성
            /**
             * 주소검색 에이피아이 연동해야함
             */
            RegexHelper.value(current.zonecode,'우편번호를 입력해 주세요');
            RegexHelper.num(current.zonecode,'우편번호는 숫자만 입력 가능합니다');
            RegexHelper.value(current.addr1,'기본주소를 입력해 주세요');
            RegexHelper.value(current.addr2,'나머지 주소를 입력해 주세요');
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        dispatch(postUserItem({
            userid:current.userid.value,
            userpw:current.userpw.value,
            username:current.username.value,
            phone:current.phone.value,
            snsRCPT:enum1,
            useremail:current.useremail.value,
            emailRCPT:enum2,
            zonecode:current.zonecode.value,
            addr1:current.addr1.value,
            addr2:current.addr2.value,
            regdate:dayjs().format('YYYY-MM-DD HH:mm:ss'),
            editdate:dayjs().format('YYYY-MM-DD HH:mm:ss'),
            point:'0'
        }))
        setCompleteState({
            ...CompleteState,
            complete:true,
            userid:current.userid.value,
            userpw:current.userpw.value,
        })
        
    },[overlap,dispatch,CompleteState])

    //중복검사이벤트
    const idInfoSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = mega.current
    
        
        try {
            dispatch(getUserItem({
                userid:current.value
            }))
            //아이디 유효성
            /**
             * 중복검사쪽에서 되게끔 수정필요
             * 중복아이디,사용가능아이디
             * 중복검사 진행여부 확인해야함
             */
             RegexHelper.value(current,'아이디는 필수 정보입니다');
             RegexHelper.engNum(current,'아이디는 영문,숫자만 입력 가능합니다');
             RegexHelper.minLength(current,8,'아이디는 8글자 이상만 입력 가능합니다');
             RegexHelper.maxLength(current,20,'아이디는 최대 20글자 까지 입력 가능합니다');

        }catch(e) {
            window.alert(e.message);
            return;
        }finally{
            setOverlap({
                blo:true,
                data:current.value
            });
            if (data.rt === 200) {
                window.alert('이미 사용중인 아이디 입니다')
            }else if (data.rt === 500) {
    
                window.alert('사용 가능한 아이디 입니다');
            }
        }
        console.clear();
    },[setOverlap,dispatch,data])
        
    //아이디 체인지 이벤트
    const idChange = React.useCallback((e)=> {
        const length = e.target.value;
        if (length.length > 7) {
            console.clear();
            dispatch(getUserItem({
                userid:length
            }))
        }
    },[dispatch])    

        

    //주소검색 버튼 이벤트
    const addrSearchButton = React.useCallback(()=> {
        setModalBox(true);
    },[])
    //주소정보 이벤트
    const addrInfo = React.useCallback((e)=> {
        setDaumJuso({
            ...daumJuso,
            addr:e.address,
            zonecode:e.zonecode,
            blo:true
            
        })
    },[daumJuso])

    //주소 정보 확인버튼 이벤트
    const addrButton = React.useCallback(()=> {
        const current = inputRef.current
        try {
            RegexHelper.value(current,'나머지 주소를 입력하세요');
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }
        setDaumJuso({
            ...daumJuso,
            addr2:current.value,
            blo:false
        })
        setModalBox(modalBox=>!modalBox);
    },[daumJuso])

    //주소 정보 closebutton 이벤트
    const addrCloseButton = React.useCallback(()=> {
        setModalBox(modalBox=>!modalBox);
        setDaumJuso({
            ...daumJuso,
            blo:false
        })
    },[daumJuso])
    return (
        <SignupInfoCss>
            <div className='signup-info-box'>
                <h1>C P L Y</h1>
                <div className='signup-info-box-margin'>
                    <form onSubmit={SignupInfoSubmit}>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>아이디<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='text' name='userid' placeholder='아이디를 입력해 주세요' ref={mega} onChange={idChange}/></div>
                            <div className='signup-info-div3'><button onClick={idInfoSubmit}>중복확인</button></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>비밀번호<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='password' name='userpw' placeholder='비밀번호를 입력해 주세요'/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>비밀번호 확인<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='password' name='userpwre'/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>이름<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='text' name='username' placeholder='이름을 입력해 주세요'/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>전화번호<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='text' name='phone' placeholder='(-)를 제외한 전화번호'/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>SNS 수신</h2></div>
                            <div className='signup-info-div2'>
                                <span>동의</span>                                
                                <input type='checkbox' name='snsRCPT' className=' signup-info-check' defaultChecked={true}/>
                            </div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>이메일<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='text' name='useremail' placeholder='이메일을 입력해주세요'/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>이메일 수신</h2></div>
                            <div className='signup-info-div2'>
                                <span>동의</span>    
                                <input type='checkbox' name='emailRCPT' className=' signup-info-check' defaultChecked={true}/>
                            </div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'><h2>주소<span>*</span></h2></div>
                            <div className='signup-info-div2'><input type='text' name='zonecode' placeholder='우편번호' defaultValue={daumJuso.zonecode}/></div>
                            <div className='signup-info-div3'><span onClick={addrSearchButton}>주소검색</span></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'></div>
                            <div className='signup-info-div2'><input type='text' name='addr1' placeholder='기본주소' defaultValue={daumJuso.addr}/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <div className='signup-info-div-box'>
                            <div className='signup-info-div1'></div>
                            <div className='signup-info-div2'><input type='text' name='addr2' placeholder='나머지 주소' defaultValue={daumJuso.addr2}/></div>
                            <div className='signup-info-div3'></div>                                                 
                        </div>
                        <button type='submit'>가입하기</button>
                    </form>
                </div>
            </div>
            <div className={modalBox ? 'signup-modal' : 'signup-modal modalNone'}>
            <div className='title-box'>
                <h2>주소찾기</h2>
                <img src='./assets/img/close1.png' alt='closeButton' onClick={addrCloseButton}/>
            </div>
                
                
                {daumJuso.blo ? (
                    <div className='juso-box'>
                    <div className='juso-box-div'>
                        <h4><span>우편번호</span>{daumJuso.zonecode}</h4>
                        <h4><span>도로명</span>{daumJuso.addr}</h4>
                        <div>
                        <input type='text' placeholder='나머지 주소' ref={inputRef}/>
                        <button onClick={addrButton}>확인</button>
                        </div>
                    </div>
                    </div>
                ):(
                    <DaumPostcode onComplete={addrInfo}  autoClose={false}/>
                )}
            
            </div>
        </SignupInfoCss>
    );
});

export default SignupInfo;