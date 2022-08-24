import React, { memo,useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { getUserItem } from '../../slices/KH/UserSlice';
import { postPaymentItem } from '../../slices/KH/PaymentSlice';
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
import dayjs from 'dayjs';
import DaumPostcode from 'react-daum-postcode';
import RegexHelper from '../../libs/RegexHelper';

const MemberPaymentCss = styled.div`
    width: 100%;
    .payment-box {
        width: 70%;
        margin: auto;
        >h1 {
            padding-bottom: 1%;
            border-bottom: 3px solid #ccc;
        }
        >form {
            h2 {
                margin-top: 3%;
                padding-bottom: 1%;
                border-bottom: 2px solid #ccc;
                font-size: 23px;
            }
            h3 {
                font-weight: normal;
                margin: 5px 0 10px 0;
                font-size: 18px;
            }
            input {
                width: 35%;
                padding: 0.5% 0;
                border-radius: 5px;
                margin-right: 2%;
            }
            span {
                border: 1px solid #000;
                border-radius: 5px;
                margin-top:1px;
                padding: 0.3%;
                background: #000;
                color: #fff;
                vertical-align: middle;
            }
            label {
                color: #f00;
                display: inline;
                >input {
                    width: 3%;
                }
                
            }
            button {
                color: #fff;
                font-size: 20px;
                background-color: #000;
                border: 1px solid #000;
                border-radius: 5px;
                padding: 0.3%;
                margin-bottom:1%;
                display: block;
            }

        }
    }
    .payment-modal {
    width: 420px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 10px;
    border: 1px solid #aaa;
    &.modalNone {
      display: none;
    }
    .title-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px;
      h2 {
        margin: 0;
      }
      > img {
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
        > div {
          width: 100%;
          margin: 30px 0;
          input {
            width: 60%;
            border-radius: 5px;
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

const MemberPayment = memo(() => {

    //나머지 주소 Ref
    const addr2Ref = React.useRef();

    //사용포인트 인풋 ref
    const pointRef = React.useRef();

    //보유포인트 인풋 ref
    const havePointRef = React.useRef();

    //리덕스 초기화
    const dispatch = useDispatch();

    const {data,loading,error} = useSelector((state)=> state.user);

    //배송지 정보 체크박스 상태값
    const [checkOn,setCheckOn] = React.useState(false);


    //modal box 상태값
    const [modalBox,setModalBox] = React.useState(false)

    //주소정보 상태값
    const [daumJuso,setDaumJuso] = React.useState({
        addr:'',
        addr2:'',
        zonecode:'',
        blo:false,
        blo1:false
        
    })

    //결제정보 상태값
    const [paymentInfo,setPaymentInfo] = React.useState({
        goods:'',
        point:'',
        total:12500,
        blo:false,
    })

    //db에 넣을 정보 상태값
    const [dbPayment,setDbPayment] = React.useState({
        memo:'',
        name:'',
        phone:'',
        zonecode:'',
        addr1:'',
        addr2:'',
        user_id:'',
        product:'',
        username:'',
    })

    //iamport 설정
    useEffect(()=> {
        const jquery = document.createElement("script");
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        return()=> {
            document.head.removeChild(jquery); document.head.removeChild(iamport);
        }
    },[]);

    //아이디 정보를 가져오는 effect
    useEffect(()=> {
        dispatch(getUserItem({
            userid:'abc123129',
            userpw:'123123123'
        }))
        setDbPayment({
            ...dbPayment,
            user_id:'abc123129',
        })
    },[dispatch])


    //배송지 정보 체크박스 이벤트
    const CheckChange = React.useCallback((e)=> {
        const current = e.target;

        if (current.checked) {
            setCheckOn(checkOn=>!checkOn)
        }else {
            setCheckOn(false);
        }
    },[setCheckOn])

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
            blo:true,            
        })
        console.log (e.address);
    },[daumJuso])

    //주소 정보 확인버튼 이벤트
    const addrButton = React.useCallback(()=> {
        const current = addr2Ref.current
        
        console.log (daumJuso.addr);
        
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
            blo:false,
            blo1:true

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

    //보유포인트/사용포인트 유효성검사 및 로직
    const pointButton = React.useCallback(()=> {
        const current = pointRef.current
        const current2 = havePointRef.current
        try {
            RegexHelper.value(current,'사용포인트를 입력해주세요')
            RegexHelper.num(current,'사용포인트는 숫자만 입력가능합니다')
            RegexHelper.overnum(current,current2,'사용포인트는 보유포인트를 넘어설수 없습니다.')
            RegexHelper.zero(current,'보유포인트가 없습니다.')
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        setPaymentInfo({
            ...paymentInfo,
            point:current,
            blo:true,
        })
    },[])

    const onClickPayment = React.useCallback((e)=> {
        e.preventDefault();
        const current= e.target;
        console.log (current.memo.value);
        setDbPayment({
            ...dbPayment,
            memo:current.memo.value,
            name:current.name.value,
            phone:current.phone1.value,
            zonecode:current.zonecode.value,
            addr1:current.addr.value,
            addr2:current.addr2.value,
            product:'{"color":"black","size":"L""price":"10000"}',
            username:current.username.value,
        })
        const {IMP} = window; IMP.init('imp76184821');
        const data = {
            pg: "html5_inicis",
            pay_ment:'card',
            merchant_uid:`mid_${new Date().getTime()}`,
            name:'결제테스트',
            amount:100,
            custom_data:{name:'부가정보',desc:'세부 부가정보'},
            buyer_name:current.username.value,
            buyer_tel:current.phone.value,
            buyer_email:current.email.value,
            buyer_addr:current.addr.value,
            buyer_postcode:current.addr2.value
        };
        IMP.request_pay(data,callback);
        IMP.close();
    },[])
    const callback = React.useCallback((response)=> {
        const{success,error_msg,imp_uid,merchant_uid,pay_ment,paid_amount,status,data}= response;
        if (success) {
            alert('결제성공')
            dispatch(postPaymentItem({
                memo:dbPayment.memo,
                name:dbPayment.name,
                phone:dbPayment.phone,
                zonecode:dbPayment.zonecode,
                addr1:dbPayment.addr1,
                addr2:dbPayment.addr2,
                user_id:dbPayment.user_id,
                product:dbPayment.product,
                username:dbPayment.username
            }))
        }else {

            alert(`결제 실패 : ${error_msg}`);
        }
    },[])
    return (
        <MemberPaymentCss>
            <Spinner visible={loading}/>
            {error ? (
                <>
                    <ErrorView error={error} />
                </>
            ): (
                data && (
                    <>
                        <div className='payment-box'>
                        <h1>주문 결제</h1>
                        <div><h1>상품내역 박스</h1></div>
                        <form onSubmit={onClickPayment}>
                            <h2>주문자 정보</h2>
                            <h3>이름</h3>
                            <input type='text' name='username' disabled value={data.item.username}/>
                            <h3>전화번호</h3>
                            <input type='text' name='phone' disabled value={data.item.phone}/>
                            <h3>이메일</h3>
                            <input type='text' name='email' disabled value={data.item.useremail}/>
                            <h2>배송지 정보</h2>
                            <label>
                                주문자 정보와 동일
                                <input type='checkbox' onChange={CheckChange}/>
                            </label>
                            <h3>이름</h3>
                            <input type='text' name='name' disabled={checkOn ? true:false} defaultValue={checkOn ? (data.item.username):''}/>
                            <h3>전화번호</h3>
                            <input type='text' name='phone1' disabled={checkOn ? true:false} defaultValue={checkOn ? (data.item.phone):''}/>
                            <h3>우편번호</h3>
                            <input type='text' name='zonecode' disabled={checkOn ? true:false} defaultValue={checkOn ? (data.item.zonecode):(daumJuso.blo1 ? (daumJuso.zonecode):'')}/>
                            <h3>상세 주소</h3>
                            <input type='text' name='addr' disabled={checkOn ? true:false} defaultValue={checkOn ? (data.item.addr1):(daumJuso.blo1 ? (daumJuso.addr):'')}/>
                            <h3>나머지 주소</h3>
                            <input type='text' name='addr2' disabled={checkOn ? true:false} defaultValue={checkOn ? (data.item.addr2):(daumJuso.blo1 ? (daumJuso.addr2):'')}/>
                            {checkOn ? '':<span onClick={addrSearchButton}>주소검색</span>}
                            <h3>요청 메모</h3>
                            <input type='text' name='memo'/>
                            <h2>포인트 사용</h2>
                            <h3>보유포인트</h3>
                            <input type='text' name='point' disabled value={data.item.point} ref={havePointRef}/>
                            <h3>사용포인트</h3>
                            <input type='text' name='point2' ref={pointRef}/>
                            <span onClick={pointButton}>사용하기</span>
                            <h2>결제정보</h2>
                            <h3>상품금액</h3>
                            <h4>10000원</h4>
                            <h3>배송비</h3>
                            <h4>2500원</h4>
                            <h3>포인트사용</h3>
                            <h4>-{paymentInfo.blo ? (paymentInfo.point):'0'}원</h4>
                            <h3>총 결제금액</h3>
                            <h4>10500원</h4>
                            <button type='submit'>결제하기</button>
                        </form>
                        </div> 
                        <div className={modalBox ? 'payment-modal' : 'payment-modal modalNone'}>
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
                                        <input type='text' placeholder='나머지 주소' ref={addr2Ref}/>
                                        <button onClick={addrButton}>확인</button>
                                        </div>
                                    </div>
                                    </div>
                                ):(
                                    <DaumPostcode onComplete={addrInfo}  autoClose={false}/>
                                )}
                        
                        </div>
                    </>
                )
            )}
        </MemberPaymentCss>
    );
});

export default MemberPayment;