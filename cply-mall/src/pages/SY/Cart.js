/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @filename: Cart.js
 * @description: 장바구니 페이지
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
                height: 39px;
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

  const { query, rows, page } = useQueryString({
    query: "",
    rows: 10,
    page: 1,
  });
  /** 데이터 수정 후 목록 페이지로 강제 이동하기 위한 함수 생성 */
  const navigate = useNavigate();

  //품절된 상품의 상태값
  const [soldOut, setSoldOut] = React.useState(false);

  //데이터를 받아왔을 때 변경될 상태값
  const [dataState, setDataState] = React.useState(false);

  /** 최초 마운트 혹은 QueryString이 변경될 때 마다 hook -> 리덕스를 통해 목록을 조회한다. */
  React.useEffect(() => {
    dispatch(
      getList({
        query: query,
      })
    );
    setDataState(true);
    
  }, [dispatch, query, dataState]);

  //상태값을 생성하고 useEffect로 데이터를 받아올때 (dispatch) 상태값이 true로 변경 후
  //상태값이 true일때라는 조건을 걸어서 데이터를 사용하는 방법

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

  //수량 옵션 버튼이 눌렸을 경우 횟수를 담은 변수
  let cut = 0;

  //상품 수량이 최대값, 최소값을 관리할 상태값- 범위를 넘을경우 false로 변경
  const [goodsCount, setGoodsCount] = React.useState(true);

  const onClickPlus = React.useCallback(
    (e) => {
      const current = e.target;
      if (cut > 51) {
        setGoodsCount(false);
      } else {
        setGoodsCount(true);
        cut++;
        cut += Number.parseInt(current.dataset.count);
        dispatch(
          putItem({
            id: current.dataset.cart_id,
            qty: cut,
            goodsOption: current.dataset.goods_option,
            goodnumber: current.dataset.goodnumber,
            userid: current.dataset.userid,
          })
        );
      }
      window.location.reload();
      console.log(goodsCount, cut);
    },
    [goodsCount, cut]
  );

  const onClickMinus = React.useCallback(
    (e) => {
      const current = e.target;
      if (cut < 0) {
        setGoodsCount(false);
      } else {
        setGoodsCount(true);
        cut--;
        cut += Number.parseInt(current.dataset.count);
        dispatch(
          putItem({
            id: current.dataset.cart_id,
            qty: cut,
            goodsOption: current.dataset.goods_option,
            goodnumber: current.dataset.goodnumber,
            userid: current.dataset.userid,
          })
        );
      }
      window.location.reload();
      console.log(goodsCount, cut);
    },
    [goodsCount, cut]
  );

  //상품의 상태값
  const [ItemCheck, setItemCheck] = React.useState();

  //장바구니의 데이터 갯수만큼 id값을 넣을 배열
  const CartItem = [];

  //체크박스 상태를 관리하기 위한 배열
  const [checkedList, setCheckedLists] = React.useState([]);
  //전체 체크 클릭시
  const onCheckedAll = React.useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        //CartItem의 정보를 checkList에 넣음(id만)
        console.log("CartItem", CartItem);
        CartItem.forEach((v) => checkedListArray.push(v));
        console.log("CartItem의 id값을 push한 배열", checkedListArray);
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
      console.log(checkedList);
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
        setCheckedLists(checkedList.filter((item) => item !== list));
        //checkedList의 아이템이 상품의 id와 같지 않다면 true를 반환
      }
      console.log(checkedList);
    },
    [checkedList]
  );

  //체크된 상품만 삭제 이벤트
  const onChoiceDelete = React.useCallback((e) => {
    if (window.confirm("선택하신 상품을 삭제하시겠습니까?")) {
      const current = e.target;
      dispatch(
        deleteItem({
          id: current.dataset.deleteId,
        })
      );
      alert("선택하신 상품이 삭제되었습니다.");
      window.location.reload();
    }
  });
  //체크박스가 선택된 아이템의 총 가격을 담을 변수
  let totalSum = null;

  return (
    <>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data &&
        (data.item.cartData ? (
          <CartArea>
            <div className="checkButArea">
              <span>
                <label>
                  {/*데이터의 id값을 CartItem에 넣어줌 */}
                  {data.item.cartData.forEach((v) => {
                    CartItem.push(v.id);
                  })}
                  <input
                    type="checkbox"
                    name="allCheck"
                    onClick={(e) => onCheckedAll(e.target.checked)}
                    checked={
                      checkedList.length === 0
                        ? false
                        : data.item.cartData.length === CartItem.length
                        ? true
                        : false
                    }
                  />
                  전체 선택
                  <span>
                    ({checkedList.length}/{data.item.cartData.length})
                  </span>
                </label>
              </span>
              <span>
                <button type="button" onClick={onChoiceDelete}>
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

            {data &&
              data.item.cartData.map((v, i) => {
                
                //상품 데이터의 id값과 장바구니 데이터의 goodnumber가 같은 아이템을 filter로 걸러냄
                let filter = data.item.goodsData.filter(
                  (value) => value.goodsId === v.goodnumber
                  );
                  
                  //상품 * 가격
                  let sum = filter[0].price * v.qty;
                  
                  //체크된 상품과 item의 id가 같다면 각 상품의 총 가격을 더함
                  checkedList.forEach((item) => {
                    if (v.id === item) {
                      totalSum += sum;
                    }
                  });
                  //상품의 재고가 0일경우 sold out UI로 변경- true일경우 노출
                if(filter[0].stock === 0){
                  console.log(v.id)
                }

                return (
                  <div
                    className={"ItemArea " + (soldOut ? "soldOut" : "")}
                    key={i}
                  >
                    <div className="ItemInfoArea">
                      <div className="ItemInfoTopArea">
                        <div className="ItemInfo">
                          <span>
                            <input
                              key={v.id}
                              type="checkbox"
                              onChange={(e) =>
                                onCheckedElement(e.target.checked, v.id)
                              }
                              checked={
                                checkedList.includes(v.id) ? true : false
                              }
                            />
                          </span>
                          <span>
                            {soldOut && <span>품절</span>}
                            <img src={Img} alt="상품이미지" width="100px" />
                          </span>
                          <span>
                            <p>{filter[0].title}</p>
                            <p>{soldOut ? "0" : filter[0].price}원</p>
                          </span>
                          <FontAwesomeIcon
                            icon={faXmark}
                            size="2x"
                            className="deleteItem"
                            data-delete_id={v.id}
                            onClick={(e) => {
                              //이벤트가 발생한 자기 스스로
                              const current = e.target;
                              dispatch(
                                deleteItem({
                                  id: current.dataset.delete_id,
                                })
                              );
                              window.location.reload();
                            }}
                          />
                        </div>
                      </div>
                      <div className="ItemInfoButtonArea">
                        <div className="ItemOption">
                          <span>{v.goodsOption}</span>
                          <div className="ItemNum">
                            <div className="numOptionArea">
                              <FontAwesomeIcon
                                className="numOption"
                                icon={faMinus}
                                data-cart_id={v.id}
                                data-count={v.qty}
                                data-goodnumber={v.goodnumber}
                                data-goods_option={v.goodsOption}
                                data-userid={v.userid}
                                onClick={onClickMinus}
                                disabled={goodsCount}
                              />
                              <span>{soldOut ? "0" : v.qty}</span>
                              <FontAwesomeIcon
                                className="numOption"
                                icon={faPlus}
                                data-cart_id={v.id}
                                data-count={v.qty}
                                data-goodnumber={v.goodnumber}
                                data-goods_option={v.goodsOption}
                                data-userid={v.userid}
                                onClick={onClickPlus}
                                disabled={goodsCount}
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
              })}
            <div className="SumArea">
              <div className="LeftSum">
                <div>
                  총 상품 금액
                  <p>{totalSum === null ? '0' : totalSum}원</p>
                </div>
                <div className="plus">+</div>
                <div>
                  배송비
                  <p>000원</p>
                </div>
              </div>
              <div className="RightSum">
                총 결제 금액
                <p>{totalSum === null ? '0' : totalSum}원</p>
              </div>
            </div>
            <div className="OrderButton">
              <NavLink to="#">구매 하기</NavLink>
            </div>
          </CartArea>
        ) : (
          <div>
            <NoCart />
          </div>
        ))
      )}
    </>
  );
});

export default Cart;
