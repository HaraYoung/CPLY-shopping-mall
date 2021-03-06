/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @filename: Cart.js
 * @description: 장바구니 페이지
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import { reducer } from "../../components/NumOption";

import Img from "./img/찡찡이젤리.jpg";

//체크 박스 수정
const CartArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .checkButArea {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gainsboro;
    padding: 1em 0;
    button {
      border: none;
      padding: 0.5em;
      margin: 0 0.5em;
      border-radius: 4px;
      &:hover {
        color: #fff;
        background-color: gray;
        cursor: pointer;
      }
    }
  }
  .ItemArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    .ItemTitle {
      display: flex;
      justify-content: space-between;
      padding: 1em 0;
      border-top: 1px solid gainsboro;
      border-bottom: 1px solid gainsboro;
      span {
        font-weight: bolder;
      }
      .Title1 {
        width: 65%;
        text-align: center;
      }
      .Title2 {
        width: 40%;
        display: flex;
        justify-content: space-around;
      }
    }
    .ItemInfoArea {
      display: flex;
      justify-content: space-between;
      position: relative;
      .ItemInfo {
        display: flex;
        span {
          padding: 1em;
          p {
            padding: 0 1em;
            font-weight: bolder;
          }
        }
        .deleteItem {
          position: absolute;
          top: 10%;
          right: 42%;
          cursor: pointer;
        }
      }
      .ItemInfoTopArea {
        display: flex;
        border-bottom: 1px solid gainsboro;
        width: 60%;
      }
      .ItemInfoButtonArea {
        width: 40%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gainsboro;
        .ItemOption {
          border-left: 1px solid gainsboro;
          border-right: 1px solid gainsboro;
          width: 50%;
          padding: 1.5em 1em;
          span {
            display: inline-block;
            padding: 0.5em 0;
          }
          .ItemNum {
            padding: 0.5em 0;
            border-top: 1px solid #000;
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
            }
          }
        }
      }
      .OrderArea {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
          padding: 0.5em 0;
        }
        button {
          padding: 0.5em 1em;
          background-color: #000;
          border-radius: 6px;
          color: #fff;
        }
      }
    }
  }
  .SumArea {
    display: flex;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    margin-top: 5em;
    padding: 2em 0;
    width: 100%;
    justify-content: space-around;
    .LeftSum {
      width: 20%;
      display: flex;
      justify-content: space-around;
      padding-top: 0.5em;
      div {
        display: inline-block;
        text-align: center;
        p {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
        }
      }
      .plus {
        font-size: 30px;
        color: gainsboro;
        margin: auto;
      }
    }
    .RightSum {
      width: 20%;
      display: inline-block;
      padding: 0 3em;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      border-left: 1px solid gainsboro;

      p {
        font-size: 25px;
        text-align: center;
        color: red;
      }
    }
  }
  .OrderButton {
    padding: 5em 0;
    a {
      background-color: red;
      padding: 1em 6em;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bolder;
      font-size: 20px;
    }
  }
  .soldOut {
    opacity: 0.6;
    span {
      position: relative;
      img {
      }
      span {
        position: absolute;
        left: 13%;
        top: 5%;
        font-weight: bold;
        font-size: 25px;
      }
    }
  }
`;

const Cart = memo(({ step = 1, min = 0, max = 10 }) => {
  //품절된 상품의 상태값
  const [soldOut, setSoldOut] = React.useState(true);

  //품절된 상품 삭제 이벤트
  const onSoldOutDelete = () => {
    if (window.confirm("품절된 상품을 삭제하시겠습니까?")) {
      alert("품절된 상품이 삭제되었습니다.");
      setSoldOut(!soldOut);
    }
  };
  //수량 옵션 상태값과 이벤트
  // const [optionNum, setOptionNum] = React.useState(1);
  // const onClickPlus = () => {
  //   setOptionNum(optionNum + 1);
  // };
  // const onClickMinus = () => {
  //   setOptionNum(optionNum - 1);
  // };
  // const initialState = { count: 0 };
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state.count < action.max
  //         ? { count: state.count + action.step }
  //         : state;
  //     case "DECREMENT":
  //       return state.count > action.min
  //         ? { count: state.count - action.step }
  //         : state;
  //     default:
  //       throw new Error("Unsupported action type:", action.type);
  //   }
  // }
  // const [state, dispatch] = React.useReducer(reducer, initialState);

  //상품의 상태값
  const [ItemCheck, setItemCheck] = React.useState(true);

  //체크 박스
  const CartItem = [{ id: 1 }, { id: 2 }, { id: 3 }];

  //체크박스 상태를 관리하기 위한 배열
  const [checkedList, setCheckedLists] = React.useState([]);
  //전체 체크 클릭시
  const onCheckedAll = React.useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        //CartItem의 정보를 checkList에 넣음(id만)
        CartItem.forEach((list) => checkedListArray.push(list.id));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [CartItem]
  );
  //개별 체크 클릭시
  const onCheckedElement = React.useCallback(
    (checked, list) => {
      if (checked) {
        //클릭된 개별 체크박스의 list를 기존의 checkList 배열에 추가
        setCheckedLists([...checkedList, list]);
      } else {
        //아닌경우 filter메서드로 걸러냄
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  //체크된 상품만 삭제 이벤트
  const onChoiceDelete = () => {
    if (window.confirm("선택하신 상품을 삭제하시겠습니까?")) {
      alert("선택하신 상품이 삭제되었습니다.");
    }
  };
  return (
    <CartArea>
      <div className="checkButArea">
        <span>
          <label>
            <input
              type="checkbox"
              name="allCheck"
              onClick={(e) => onCheckedAll(e.target.checked)}
              checked={checkedList.length === CartItem.length ? true : false}
            />
            전체 선택
            <span>
              ({checkedList.length}/{CartItem.length})
            </span>
          </label>
        </span>
        <span>
          <button type="button" onClick={onChoiceDelete}>
            선택 삭제
          </button>
          <button type="button" onClick={onSoldOutDelete}>
            품절 삭제
          </button>
        </span>
      </div>
      {/*품절된 상품 */}
      {soldOut && (
        <div className="ItemArea soldOut">
          <div className="ItemInfoArea">
            <div className="ItemInfoTopArea">
              <div className="ItemInfo">
                <span>
                  <input type="checkbox" name="ItemCheck" value="true" />
                </span>
                <span>
                  <span>품절</span>
                  {/*상품의 클래스에 soldOut이 있다면 추가할 태그*/}
                  <img src={Img} alt="상품이미지" width="100px" />
                </span>
                <span>
                  <p>상품 이름</p>
                  <p>000원</p>
                </span>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2x"
                  className="deleteItem"
                  onClick={(e) => {
                    setSoldOut(!soldOut);
                  }}
                />
              </div>
            </div>
            <div className="ItemInfoButtonArea">
              <div className="ItemOption">
                <span>옵션</span>
                {/*soldOut클래스가 적용되어있을 경우 숫자변경 버튼 없대기 */}
                <div className="ItemNum">
                  <div>
                    <button type="button">+</button>
                    <span>1</span>
                    <button type="button">-</button>
                  </div>
                  <div>
                    <p>000원</p>
                  </div>
                </div>
              </div>
              {/*soldOut클래스가 적용되어있을 경우 0원으로 바꾸고 구매하기 버튼 없대기 */}
              {
                <div className="OrderArea">
                  <div>0000원</div>
                </div>
              }
            </div>
          </div>
        </div>
      )}
      {ItemCheck &&
        CartItem.map((list, i) => (
          <div className="ItemArea">
            <div className="ItemTitle">
              <div className="Title1">
                <span>상품 정보</span>
              </div>
              <div className="Title2">
                <span>옵션</span>
                <span>상품 금액</span>
              </div>
            </div>
            <div className="ItemInfoArea">
              <div className="ItemInfoTopArea">
                <div className="ItemInfo">
                  <span>
                    <input
                      key={list.id}
                      type="checkbox"
                      onChange={(e) =>
                        onCheckedElement(e.target.checked, list.id)
                      }
                      checked={checkedList.includes(list.id) ? true : false}
                    />
                  </span>
                  <span>
                    <img src={Img} alt="상품이미지" width="100px" />
                  </span>
                  <span>
                    <p>상품 이름</p>
                    <p>000원</p>
                  </span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className="deleteItem"
                    onClick={(e) => {
                      setItemCheck(!ItemCheck);
                    }}
                  />
                </div>
              </div>
              <div className="ItemInfoButtonArea">
                <div className="ItemOption">
                  <span>옵션</span>
                  <div className="ItemNum">
                    <div>
                      <button
                        type="button"
                        // onClick={() =>
                        //   dispatch({ type: "INCREMENT", step, max })
                        // }
                      >
                        +
                      </button>
                      <span>{}</span>
                      <button
                        type="button"
                        // onClick={() =>
                        //   dispatch({ type: "DECREMENT", step, min })
                        // }
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <p>000원</p>
                    </div>
                  </div>
                </div>
                <div className="OrderArea">
                  <div>0000원</div>
                  <button type="button">주문하기</button>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className="SumArea">
        <div className="LeftSum">
          <div>
            총 상품 금액
            <p>000원</p>
          </div>
          <div className="plus">+</div>
          <div>
            배송비
            <p>000원</p>
          </div>
        </div>
        <div className="RightSum">
          총 결제 금액
          <p>0000원</p>
        </div>
      </div>
      <div className="OrderButton">
        <NavLink to="#">구매 하기</NavLink>
      </div>
    </CartArea>
  );
});

export default Cart;
