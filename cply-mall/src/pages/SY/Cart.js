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
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useQueryString } from "../../hooks/useQueryString";

import ErrorView from "../../components/ErrorView";
import { reducer } from "../../components/NumOption";
import Spinner from "../../components/Spinner";

import useMountedRef from "../../hooks/useMounterRef";

import NoCart from "./NoCart";

//slice참조
import { getList, deleteItem, putItem } from "../../slices/SY/CartSlice";

import Img from "./img/찡찡이젤리.jpg";
import { current } from "@reduxjs/toolkit";

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
  .ItemTitle {
    width: 100%;
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
  .ItemArea {
    display: flex;
    flex-direction: column;
    width: 100%;
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
            min-width: 195px;
            padding: 0.5em 0;
            border-top: 1px solid #000;
            display: flex;
            justify-content: space-around;
            .numOptionArea {
              margin-top: 1em;
              display: flex;
              span {
                width: 36px;
                height: 21px;
                display: inline-block;
                text-align: center;
                border: 1px solid gainsboro;
                border-radius: 4px;
              }
              .numOption {
                width: 36px;
                padding: 10px 0;
                border: 1px solid gainsboro;
                border-radius: 4px;
                background-color: #fff;
              }
              .optionPrice {
                margin-left: 1.5em;
              }
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

const Cart = memo(({ step = 1, min = 0, max = 50 }) => {
  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CartSlice);
  console.log(data);

  const { query, rows, page } = useQueryString({
    query: "",
    rows: 10,
    page: 1,
  });

  /** 최초 마운트 혹은 QueryString이 변경될 때 마다 hook -> 리덕스를 통해 목록을 조회한다. */
  React.useEffect(() => {
    //false=최초 등장시, true=최초 등장 이후
    dispatch(
      getList({
        query: query,
      })
    );
  }, [dispatch, query]);

  //품절된 상품의 상태값
  const [soldOut, setSoldOut] = React.useState(false);

  //품절된 상품 삭제 이벤트
  // const onSoldOutDelete = () => {
  //   if (data.item.qty === 0) {
  //     if (window.confirm("품절된 상품을 삭제하시겠습니까?")) {
  //       alert("품절된 상품이 삭제되었습니다.");
  //       setSoldOut(!soldOut);
  //       dispatch(
  //         deleteItem({
  //           id: query.id,
  //         })
  //       );
  //     }
  //   }
  // };
  //수량 옵션 상태값과 이벤트
  //const initialState = {};

  /*state: 현재 가리키고있는 상태, amount: action값을 발생시키는 함수
  reducer: reducer함수,initialState: 해당 reducer함수의 기본값*/
  //const [state, amount] = React.useReducer(reducer, initialState);

  //상품 수량 변동을 관리할 상태값
  const [goodsCount, setGoodsCount] = React.useState({
    //상품의 수량
    goodsQty: [],
    //상품의 카운트값
    count: [],
    //합친값
    qtyCut: [],
  });

  //상품의 상태값
  const [ItemCheck, setItemCheck] = React.useState();

  //체크 박스-data의 id
  // const b= data.item.map((v, i)=> {
  //     console.log ('index= '+i);
  //     console.log ('item= '+v);
  //   return v
  // })
  // console.log(b);
  const CartItem = [];
  // data.item.map((v, i)=>{
  //    CartItem.push(i);
  //    return CartItem;
  // })

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
  const onChoiceDelete = React.useCallback((e)=> {
    if (window.confirm("선택하신 상품을 삭제하시겠습니까?")) {
      alert("선택하신 상품이 삭제되었습니다.");
    }
  });
  //총 가격을 담을 변수
  let DSum = null;
  //상품의 수량을 담을 상태값
  let cut = [];
  return (
    <>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : data ? (
        <CartArea>
          <div className="checkButArea">
            <span>
              <label>
                <input
                  type="checkbox"
                  name="allCheck"
                  onClick={(e) => {
                    onCheckedAll(e.target.checked);
                  }}
                  checked={
                    checkedList.length === data.item.length ? true : false
                  }
                />
                전체 선택
                <span>
                  ({checkedList.length}/{data.item.length})
                </span>
              </label>
            </span>
            <span>
              <button
                type="button"
                // data-deleteId={data.item.id}
                onClick={onChoiceDelete}
              >
                선택 삭제
              </button>
              <button
                type="button"
                // data-deleteId={data.item.id}
              >
                품절 삭제
              </button>
            </span>
          </div>
          <div className="ItemTitle">
            <div className="Title1">
              <span>상품 정보</span>
            </div>
            <div className="Title2">
              <span>옵션</span>
              <span>상품 금액</span>
            </div>
          </div>
          {data && (data.item.map((item, index) => {
            //상품 * 가격
            let sum = 0;
            sum = item.qty * item.price;

            //각 item의 item.qty * item.price을 저장하기 위한 배열
            let totalSum = [];
            totalSum.push(sum);

            //reduce함수로 각각의 상품*가격을 합친 총 가격
            DSum = totalSum.reduce(function add(a, currValue) {
              return a + currValue;
            }, 0);

            // cut.push(item.qty);
            // console.log(cut)
            // console.log('cut:'+cut[2])

            //카운트 상태값, 배열을 상품의 인덱스와 같은 인덱스를 가진 원소와 더해 화면에 출력
            //item이 생성되면 item의 index만큼 같이 원소가 늘어남
            //goodsCount.push({count: 0});

            return (
              <div
                className={"ItemArea " + (soldOut ? "soldOut" : "")}
                key={index}
              >
                <div className="ItemInfoArea">
                  <div className="ItemInfoTopArea">
                    <div className="ItemInfo">
                      <span>
                        <input
                          key={index}
                          type="checkbox"
                          onChange={(e) =>
                            onCheckedElement(e.target.checked, index)
                          }
                          checked={checkedList.includes(index) ? true : false}
                        />
                      </span>
                      <span>
                        {soldOut && <span>품절</span>}
                        <img src={Img} alt="상품이미지" width="100px" />
                      </span>
                      <span>
                        <p>{item.title}</p>
                        <p>{soldOut ? "0" : item.price}원</p>
                      </span>
                      <FontAwesomeIcon
                        icon={faXmark}
                        size="2x"
                        className="deleteItem"
                        data-deleteId={item.id}
                        onClick={(e) => {
                          //이벤트가 발생한 자기 스스로
                          const current = e.target;
                          dispatch(
                            deleteItem({
                              id: current.dataset.deleteId,
                            })
                          );
                          //setItemCheck(!ItemCheck);
                        }}
                      />
                    </div>
                  </div>
                  <div className="ItemInfoButtonArea">
                    <div className="ItemOption">
                      <span>{item.goodsOption}</span>
                      <div className="ItemNum">
                        <div className="numOptionArea">
                          <FontAwesomeIcon
                            className="numOption"
                            icon={faMinus}
                            onClick={(e) => {
                              setGoodsCount({
                                ...goodsCount,
                                count: -1,
                              });
                              //amount({ type: "DECREMENT", step, min });
                              // dispatch(
                              //   putItem({
                              //     id: item.id,
                              //     qty: state.count + item.qty,
                              //     title: item.title,
                              //     goodsOption: item.goodsOption,
                              //     thumbnail: item.thumbnail,
                              //     price: item.price,
                              //     goodnumber: item.goodnumber,
                              //     userid: item.userid,
                              //     stock: item.stock,
                              //     chose: item.chose,
                              //   })
                              // );
                            }}
                          />
                          <span>{soldOut ? "0" : item.qty}</span>
                          <FontAwesomeIcon
                            className="numOption"
                            icon={faPlus}
                            //onClick={() => {
                            // dispatch(
                            //   putItem({
                            //     id: item.id,
                            //     qty: state.count + item.qty,
                            //     title: item.title,
                            //     goodsOption: item.goodsOption,
                            //     thumbnail: item.thumbnail,
                            //     price: item.price,
                            //     goodnumber: item.goodnumber,
                            //     userid: item.userid,
                            //     stock: item.stock,
                            //     chose: item.chose,
                            //   })
                            // );
                            //}}
                          />
                          <div className="optionPrice">
                            <p>{soldOut ? "0" : sum}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="OrderArea">
                      <div>{soldOut ? "0" : sum}원</div>
                      {!soldOut && <button type="button">주문하기</button>}
                    </div>
                  </div>
                </div>
              </div>
            );
          }))}
          <div className="SumArea">
            <div className="LeftSum">
              <div>
                총 상품 금액
                <p>{DSum}원</p>
              </div>
              <div className="plus">+</div>
              <div>
                배송비
                <p>000원</p>
              </div>
            </div>
            <div className="RightSum">
              총 결제 금액
              <p>{DSum}원</p>
            </div>
          </div>
          <div className="OrderButton">
            <NavLink to="#">구매 하기</NavLink>
          </div>
        </CartArea>
      ) : (
        (<div>
          <NoCart />
        </div>)
      )}
    </>
  );
});

export default Cart;
