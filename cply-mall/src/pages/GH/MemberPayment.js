import React, { memo } from 'react';
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

            </form>
            </div>
        </MemberPaymentCss>
    );
});

export default MemberPayment;