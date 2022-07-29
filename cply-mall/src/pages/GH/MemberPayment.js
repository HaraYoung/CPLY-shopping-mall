import React, { memo,useEffect } from 'react';
import styled from 'styled-components';


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
                padding-bottom: 1%;
                border-bottom: 2px solid #ccc;
            }
            h3 {
                font-weight: normal;
                margin: 5px 0 10px 0;
                
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

        }
    }
`;

const MemberPayment = memo(() => {
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

    const onClickPayment =()=> {
        const {IMP} = window; IMP.init('imp76184821');
        const data = {
            pg: "html5_inicis",
            pay_ment:'card',
            merchant_uid:`mid_${new Date().getTime()}`,
            name:'결제테스트',
            amount:'100',
            custom_data:{name:'부가정보',desc:'세부 부가정보'},
            buyer_name:'임기원',
            buyer_tel:'01012345678',
            buyer_email:'1234@naver.com',
            buyer_addr:'강동구성내2동',
            buyer_postalcode:'05232'
        };
        IMP.request_pay(data,callback);
        IMP.close();
    }
    const callback =(response)=> {
        const{success,error_msg,imp_uid,merchant_uid,pay_ment,paid_amount,status}= response;
        if (success) {
            alert('결제성공')
        }else {
            alert(`결제 실패 : ${error_msg}`);
        }
    }
    return (
        <MemberPaymentCss>
            <div className='payment-box'>
            <h1>주문 결제</h1>
            <div><h1>상품내역 박스</h1></div>
            <form>
                <h2>주문자 정보</h2>
                <h3>이름</h3>
                <input type='text' name='name' disabled/>
                <h3>전화번호</h3>
                <input type='text' name='phone' disabled/>
                <h3>이메일</h3>
                <input type='text' name='email' disabled/>
                <h2>배송지 정보</h2>
                <h3>우편번호</h3>
                <input type='text' name='zonecode' disabled/>
                <h3>상세 주소</h3>
                <input type='text' name='addr' disabled/>
                <h3>나머지 주소</h3>
                <input type='text' name='addr2' disabled/>
                <span>수정하기</span>
                <h3>요청 메모</h3>
                <input type='text' name='memo'/>
                <h2>포인트 사용</h2>
                <h3>보유포인트</h3>
                <input type='text' name='point' disabled/>
                <span>사용하기</span>
                <h3>사용포인트</h3>
                <input type='text' name='point2'/>
                <h2>결제정보</h2>
                <h3>상품금액</h3>
                <h4>10000원</h4>
                <h3>배송비</h3>
                <h4>2500원</h4>
                <h3>포인트사용</h3>
                <h4>-2000원</h4>
                <h3>총 결제금액</h3>
                <h4>10500원</h4>
                <button onClick={onClickPayment}>결제하기</button>
            </form>
            </div>
        </MemberPaymentCss>
    );
});

export default MemberPayment;