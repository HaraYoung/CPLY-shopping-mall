/**
 * @filename: Exchange.js
 * @description: 교환 컴포넌트 페이지- 교환/반품 클릭시 첫 화면
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */

import React, { memo } from "react";
import { NavLink, Router } from "react-router-dom";
import styled from "styled-components";

import Img from "./img/찡찡이젤리.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ExchangeArea = styled.div`
  .exchange {
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
        width: 55%;
        .ItemSum {
          padding: 0.5em 0;
          display: flex;
          justify-content: space-around;
          span {
            display: inline-block;
            border: 1px solid gainsboro;
            text-align: center;
            border-radius: 4px;
            padding: 6px 10px;
          }
          button {
            border: 1px solid gainsboro;
            border-radius: 4px;
            background-color: #fff;
            padding: 6px 8px;
            font-size: 20px;
            cursor: pointer;
            &:hover {
              background-color: gray;
              color: white;
            }
          }
        }
        span select {
          padding: 0.5em;
        }
        .orderSum {
          padding-left: 1%;
        }
      }
    }
    .reason {
      padding: 3em 3em;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid gray;
      div {
        width: 100%;
        &:last-child {
          margin: auto;
        }
        select {
          width: 80%;
          height: 30px;
        }
        input {
          width: 90%;
          height: 100px;
        }
      }
    }
    .SumArea {
      padding: 3em 1em;
      .ExchangeSum {
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
          width: 30%;
          a {
            padding: 1.5em 3.5em;
            background-color: #000;
            color: #fff;
            border-radius: 6px;
          }
        }
      }
    }
  }
`;


const exchange = memo(() => {
  //옵션 수량 상태값
  const [changeOpNum, setChangeOpNum]= React.useState(1);
  const onClickPlus= ()=>{
    setChangeOpNum(changeOpNum +1);
  }
  const onClickMinus= ()=>{
    setChangeOpNum(changeOpNum - 1);
  }

  //교환하기 버튼 클릭시
  const onClickExchange= ()=>{
    if (window.confirm('교환하시겠습니까?')) {
      alert('교환 신청이 완료되었습니다.');
      window.location.href='http://localhost:3000/mypage/order';
      //리덕스로 order에 있는 해당 상품 상태를 교환 요청 확인중으로 바꿈
    }
  }
  return (
    <ExchangeArea>
      <div className="exchange">
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
            <span className="ItemSum">
              <button type="button" onClick={onClickPlus}>+</button>
              <span>{changeOpNum}</span>
              <button type="button" onClick={onClickMinus}>-</button>
            </span>
            <span>
              <select>
                <option value="0">선택한 옵션</option>
              </select>
            </span>
            <span className="orderSum">0000원</span>
          </div>
        </div>
        <div className="reason">
          <div>
            <select>
              <option value="0">교환 사유 선택</option>
              <option value="1">불량</option>
              <option value="2">단숨 변심</option>
              <option value="3">오배송</option>
            </select>
          </div>
          <div>
            <h3>교환 상세 이유</h3>
            {/*줄바꿈 가능하게 바꿀것 */}
            <input type="text" placeholder="내용을 입력해주세요." />
          </div>
        </div>
        <div className="SumArea">
          <h2>변경된 상품 금액</h2>
          <div className="ExchangeSum">
            <div className="sum">
              <p>변경 전 금액</p>
              <p>000원</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="2x"
                className="deleteItem"
              />
            </div>
            <div className="sum after">
              <p>변경 후 금액</p>
              <p>0000원</p>
            </div>
            <div className="butArea">
              <NavLink to="#" onClick={onClickExchange}>교환 하기</NavLink>
            </div>
          </div>
        </div>
      </div>
    </ExchangeArea>
  );
});

export default exchange;
