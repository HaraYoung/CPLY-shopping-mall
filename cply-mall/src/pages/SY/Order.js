/**
 * @filename: Order.js
 * @description: 주문/배송 페이지
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import Delivery from "./Delivery";
import ReviewWrite from "./ReviewWrite";
import RandE from "./RandE";

import Img from "./img/찡찡이젤리.jpg";

const OrderArea = styled.div`
position: relative;
  padding: 1em 2em;
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
          .orderNum {
            width: 40%;
            text-align: center;
          }
          .orderItemInfo {
            width: 50%;
            display: flex;
            align-items: center;
            /* border-left: 1px solid gainsboro;
            border-right: 1px solid gainsboro; */
            padding: 0 2em;
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
`;

const Order = memo(() => {
  return (
    <OrderArea>
      <h1>주문/배송조회</h1>
      {/*주문 완료 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
            <h3>2020.06.06</h3>
            <span>
              <NavLink to="#">주문 상세보기</NavLink>
              <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
            </span>
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>주문 번호</span>
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <div className="orderNum">0000-000-00</div>
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
                <Link to="RandE">주문 취소</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*배송중 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
            <h3>2020.06.06</h3>
            <span>
              <NavLink to="#">주문 상세보기</NavLink>
              <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
            </span>
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>주문 번호</span>
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <div className="orderNum">0000-000-00</div>
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
                  배송중
                  {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                </div>
                <NavLink to="#">배송 조회</NavLink>
                {/*클릭시 delivery컴포넌트 나타남 */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Delivery />
      {/*배송 완료 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
            <h3>2020.06.06</h3>
            <span>
              <NavLink to="#">주문 상세보기</NavLink>
              <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
            </span>
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>주문 번호</span>
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <div className="orderNum">0000-000-00</div>
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
                  배송완료
                  {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                </div>
                {/*클릭시 구매 확적을 묻는 알림창 뜸->확인 클릭시 구매 확정 버튼 없어짐 */}
                <NavLink to="#">구매 확정</NavLink>
                {/*클릭시 교환/반품 페이지로 이동 */}
                <div>
                  <NavLink to="#">교환/반품</NavLink>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*구매 확정 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
            <h3>2020.06.06</h3>
            <span>
              <NavLink to="#">주문 상세보기</NavLink>
              <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
            </span>
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>주문 번호</span>
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <div className="orderNum">0000-000-00</div>
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
                  구매 확정
                  {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                </div>
                <NavLink to="/reviewWrite">리뷰 쓰기</NavLink>
                {/*클릭시 리뷰쓰기 컴포넌트 나타남 */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/reviewWrite" element={<ReviewWrite />} />
        <Route path="RandE" element={<RandE />} />
      </Routes>
    </OrderArea>
  );
});

export default Order;
