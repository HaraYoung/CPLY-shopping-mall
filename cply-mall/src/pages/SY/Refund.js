/**
 * @filename: Refund.js
 * @description: 교환/반품 클릭시 나타나는 페이지에서 반품을 클릭할경우 나타나는 컴포넌트 페이지
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import { NavLink, Router } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import Img from "./img/찡찡이젤리.jpg";

const RefundArea = styled.div`
  .refund {
    padding-bottom: 5%;
    .ItemTitle {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      padding: 0.5em 0;
    }
    .ItemContent {
      border-bottom: 1px solid gray;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1em 0;
      .ItemNum {
        padding-left: 5%;
      }
      .ItemInfo {
        display: flex;
        width: 20%;
        justify-content: space-around;
        span {
          margin-top: 1.5em;
        }
      }
      .orderOption {
        display: flex;
        justify-content: space-around;
        width: 50%;
        .Option {
            padding:0 15%;
        }
        span:last-child {
            padding-right: 1%;
        }
        }
      }
    }
    .reason {
      padding: 3em 3em;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      border-bottom: 1px solid gray;
      div {
        width: 100%;
        &:last-child {
          margin: auto;
        }
        select {
          width: 80%;
          height: 30px;
          margin-top: 3.5%;
        }
        input {
          width: 90%;
          height: 100px;
        }
      }
    }
    .SumArea {
      padding: 3em 1em;
      .RefundSum {
        display: flex;
        align-items: center;
        .sum {
          width: 30%;
          p {
            text-align: center;
            &:first-child {
              font-size: 18px;
            }
            &:last-child {
              font-size: 18px;
            }
          }
        }
        .after {
          border-right: 1px solid gray;
        }
        .butArea {
          display: flex;
          justify-content: flex-end;
          width: 20%;
          a {
            padding: 1.5em 3.5em;
            background-color: #000;
            color: #fff;
            border-radius: 6px;
            text-decoration: none;
          }
        }
      }
    }
`;

const Refund = memo(() => {
  return (
    <div>
      <RefundArea>
        <div className="refund">
          {/*상품 정보 받아오기 */}
          <div className="ItemTitle">
            <span>주문 번호</span>
            <span>상품 정보</span>
            <span>수량</span>
            <span>옵션</span>
            <span>주문 금액</span>
          </div>
          <div className="ItemContent">
            <span className="ItemNum">0000-0000</span>
            <span className="ItemInfo">
              <img src={Img} alt="상품이미지" width="100px" />
              <span>상품 이름</span>
            </span>
            <div className="orderOption">
              <span>1</span>
              <span className="Option">그레이</span>
              <span >0000원</span>
            </div>
          </div>
          <div className="reason">
            <div>
              <select>
                <option value="0">반품 사유 선택</option>
                <option value="1">불량</option>
                <option value="2">단숨 변심</option>
                <option value="3">오배송</option>
              </select>
            </div>
            <div>
              <h3>반품 상세 이유</h3>
              {/*줄바꿈 가능하게 바꿀것 */}
              <input type="text" placeholder="내용을 입력해주세요." />
            </div>
          </div>
          <div className="SumArea">
            <h2>변경된 상품 금액</h2>
            <div className="RefundSum">
              <div className="sum">
                <p>주문 금액</p>
                <p>000원</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMinus} size="2x" className="minus" />
              </div>
              <div className="sum after">
                <p>포인트 사용</p>
                <p>0000원</p>
              </div>
              <div className="sum">
                <p>최종 환불 금액</p>
                <p style={{ fontSize: "25px", color: "red" }}>000원</p>
              </div>
              <div className="butArea">
                <NavLink to="#">반품 하기</NavLink>
              </div>
            </div>
          </div>
        </div>
      </RefundArea>
    </div>
  );
  //Router Exchange
});

export default Refund;
