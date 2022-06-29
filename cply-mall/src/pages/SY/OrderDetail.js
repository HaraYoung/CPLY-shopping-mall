/**
 * @filename: OrderDetail.js
 * @description: 주문 내역 페이지에서 상세 주문 내역 클릭시 이동되는 페이지
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Img from "./img/찡찡이젤리.jpg";

const DetailArea = styled.div`
  padding: 1em;
  h2 {
    text-align: center;
  }
  .orderInfo{
    div {
      border-top: 1px solid gray;
      padding: 0.5em;
      padding-bottom: 1em;
      &:last-child {
        border-bottom: 1px solid gray;
      }
      span {
        display: inline-block;
        &:first-child {
          width: 20%;
          text-align: center;
        }
      }
    }
  }
  .orderArea {
    .orderItem {
      padding: 1em 0;
      .orderHeader {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h3 {
          padding-left: 0.5em;
        }
        span {
          cursor: pointer;
          padding-bottom: 0.5em;
          a {
            text-decoration: none;
            color: #000;
            padding-right: 0.5em;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .orderItemTitle {
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        padding: 0.5em 0;
        .title1 {
          width: 30%;
          display: flex;
          justify-content: space-between;
        }
        .title2 {
          width: 25%;
          display: flex;
          justify-content: space-between;
        }
      }
      .orderItemContent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5em 0;
        border-bottom: 1px solid gainsboro;
        .info1 {
          display: flex;
          justify-content: space-around;
          width: 70%;
          align-items: center;
          .orderItemInfo {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 1.5em;
            .itemInfo {
              padding-left: 1.5em;
              color: gray;
              p:first-child {
                color: #000;
                margin-bottom: 0;
              }
              p:last-child {
                margin-top: -0.8em;
              }
            }
          }
        }
        .info2 {
          display: flex;
          justify-content: space-around;
          width: 45%;
          margin-left: 2em;
          align-items: center;

          span:first-child {
            padding-top: 0.5em;
            width: 20%;
            text-align: center;
          }
          .orderSituation {
            width: 70%;
            text-align: center;
            margin-left: 0.5em;
            div {
              padding-bottom: 1em;
              font-size: 17px;
            }
            a {
              display: inline-block;
              padding: 0.5em;
              text-decoration: none;
              background-color: #000;
              color: #fff;
              border-radius: 5px;
              font-size: 13px;
              &:hover {
                background-color: gainsboro;
                color: #000;
              }
            }
            div a {
              /* 배송완료 */
              margin-top: 0.5em;
              background-color: gainsboro;
              color: #000;
              &:hover {
                background-color: gray;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .paymentArea {
    border-bottom: 1px solid gray;
    div {
      display: flex;
      justify-content: space-between;
      padding: 1em;
    }
    .borderTop {
      border-top: 1px solid gray;
    }
    .totalSum {
      border-top: 1px solid gray;
      width: 90%;
      margin-left: 3em;
      margin-top: 1em;
      h3 {
        &:first-child {
          width: 20%;
          text-align: center;
        }
        &:last-child {
          color: red;
          margin-right: 0.5em;
        }
      }
    }
  }
  .margin{
    margin: 3em 0;
  }
  .butArea{
    text-align: center;
    button{
      font-size: 16px;
      padding: 0.5em 1.5em;
      color:#fff;
      background-color: #000;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        color: #000;
        background-color:#fff
      }
    }
  }
`;

const OrderDetail = memo(() => {
  return (
    <DetailArea>
      <div>
        <h2>주문 상세 정보</h2>
      </div>
      <div className="margin">
        <h3>주문 정보</h3>
        {/*map()을 사용- 내용을 바꿀것[주문번호,주문일자,주문자,결제금액,적립예정포인트] */}
        <div className="orderInfo">
          <div>
            <span>주문 번호</span>
            <span>00000</span>
          </div>
          <div>
            <span>주문 일자</span>
            <span>2020.06.01</span>
          </div>
          <div>
            <span>주문자</span>
            <span>000</span>
          </div>
          <div>
            <span>결재 금액</span>
            <span>0000원</span>
          </div>
          <div>
            <span>적립 예정 포인트</span>
            <span>000P</span>
          </div>
        </div>
      </div>
      <div  className="margin">
        <h3>주문 상품</h3>
        {/*주문내역의 상품 상태와 동일 -주문 내역 상태는 진행 상황만 컴포넌트로 만들어서 바꾸기*/}
              {/*주문 완료 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <span className="orderItemInfo">
                <div>
                  <img src={Img} alt="상품 이미지" width="100px" />
                </div>
                <div className="itemInfo">
                  <p>상품 이름</p>
                  <p>옵션</p>
                  <p>0개(수량)</p>
                </div>
              </span>
            </div>
            <div className="info2">
              <span>000원</span>
              <span className="orderSituation">
                <div>
                  주문 확인중
                  {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                </div>
                {/*클릭시 교환/반품 페이지로 이동 */}
                <NavLink to="#">주문 취소</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="paymentArea margin">
        <h3>결제 정보</h3>
        {/*map()을 사용- [결제수단,총 상품금액, 총 사용 포인트, 배송비] */}
        <div className="borderTop">
          <span>결제 수단</span>
          <span>0000원</span>
        </div>
        <div>
          <span>총 상품 금액</span>
          <span>0000원</span>
        </div>
        <div>
          <span>총 사용 포인트</span>
          <span>0000P</span>
        </div>
        <div>
          <span>배송비</span>
          <span>0000원</span>
        </div>
        <div className="totalSum">
          <h3>총 주문 금액</h3>
          <h3>0000원</h3>
        </div>
      </div>
      <div className="orderInfo margin">
        <h3>배송지 정보</h3>
        {/*map()을 사용- 내용을 바꿀것[수령인,핸드폰,우편번호,주소,나머지 주소,배송시 요청사항] */}
        <div>
          <span>수령인</span>
          <span>000</span>
        </div>
        <div>
          <span>휴대폰</span>
          <span>000-0000-0000</span>
        </div>
        <div>
          <span>수령인</span>
          <span>000</span>
        </div>
        <div>
          <span>우편번호</span>
          <span>00000</span>
        </div>
        <div>
          <span>주소</span>
          <span>서울시 강남구 ...</span>
        </div>
        <div>
          <span>나머지 주소</span>
          <span>이젠아카데미 13층</span>
        </div>
        <div>
          <span>배송시 요청사항</span>
          <span>문앞에 놔주세요</span>
        </div>
      </div>
      <div className="butArea margin">
        <button type="button">주문/배송 페이지로 이동</button>
      </div>
    </DetailArea>
  );
});

export default OrderDetail;
