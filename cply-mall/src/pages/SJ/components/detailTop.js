import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark as Xmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // ♡
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // ♥︎
// CSS적용을 위한 컴포넌트
import styled from "styled-components";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";

// Slice에 정의된 액션함수들 참조
import { getDetail } from "../../../slices/SJ/detailGoodsSlice.js";

import Spinner from "../../../subComponents/Spinner";
import Error from "../../../subComponents/Error";

const Div = styled.div`
  margin: auto;
  padding-top: 10em;
  /* padding: 150px; */
`;
const First = styled.section`
  display: flex;
  .img {
    width: 40%;
    height: 30em;
    margin-right: 3em;
    .swiper-main {
      height: 30em;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-gallery {
      height: 5em;
      width: 100%;
      margin: 0;
      padding: 0;
      flex-flow: row, nowrap;
      li {
        width: 25%;
        box-sizing: border-box;
        height: 100%;
        margin-right: 1em;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }
        .op {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
        }
      }
    }
  }
  .des {
    width: 60%;
    .fa {
      margin-right: 0.3em;
    }
    .reviewAmount {
      a {
        text-decoration: underline;
      }
    }
  }
  div:nth-child(2) {
    flex-direction: column;
    ul {
      display: flex;
      padding-left: 0;
      li {
        flex-shrink: 1;
      }
    }
    ul:nth-child(2),
    ul:nth-child(3),
    ul:nth-child(4),
    ul:nth-child(5) {
      justify-content: flex-start;
      li {
        margin-right: 1em;
      }
    }
  }
  ul:nth-child(2) {
    li:nth-child(1),
    li:nth-child(2) {
      font-size: 1.5em;
    }
    li:nth-child(3) {
      font-size: 1em;
      color: gray;
      text-decoration: line-through;
    }
  }
  ul:nth-child(4) {
    border-top: 0.2em solid lightgray;
    border-bottom: 0.2em solid lightgray;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  ul:nth-child(5) {
    padding-top: 1em;
  }
  .dropdown {
    width: 95%;
    form {
      width: 100%;
      select {
        margin-top: 1em;
        flex-shrink: 1;
        padding: 1em;
        width: 100%;
        font-size: 1em;
        border-radius: 0.5em;
        border-color: lightgray;
      }
    }
  }
  .select-result {
    .amount {
      background-color: #f5f6f6;
      border-radius: 8px;
      border-bottom: 10px;
      .firstUi {
        padding: 1em;
        justify-content: space-between;
        margin: 0;
        b {
          font-size: 30px;
        }
        .button {
          margin-right: 1.2em;
          margin-top: 0.5em;
          button {
            width: 100%;
            border: 0;
            background-color: #f5f6f6;
            color: gray;
            width: 30px;
            height: 30px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 15 15'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath stroke='%23C5C5C5' stroke-width='1.5' d='M3.001 3 8 8l-4.999 4.999M12.999 13 8 8l4.999-4.999'/%3E%3C/g%3E%3C/svg%3E");
            text-indent: -9999px;
            overflow: hidden;
          }
        }
      }
      .secondUi {
        padding: 1em;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .price {
    justify-content: space-between;
    margin-right: 0;
    .won {
      display: flex;
      p {
        padding-left: 0.2em;
        font-size: 0.6em;
        line-height: 2.4em;
        margin: 0;
      }
    }
  }
  .pay {
    justify-content: space-between;
    li {
      button {
        width: 100%;
        cursor: pointer;
        border-radius: 0.5em;
      }
    }
    .buy {
      width: 77%;
      button {
        border: none;
        padding: 0.5em;
        font-size: 1.5em;
        font-weight: bolder;
        background-color: #eee;
      }
    }
    .cart,
    .heart {
      width: 8%;
      margin: 0;
      button {
        border: 1px solid lightgray;
        padding: 0.2em 0;
        font-size: 1.9em;
        background-color: white;
      }
    }
  }
`;

const DetailGoods = () => {
  useEffect(() => console.clear(), []);

  const navigate = useNavigate();

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector((state) => state.detailGoods);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  const [urlImg, setUrlImg] = useState(
    "https://cdn.shopify.com/s/files/1/1071/7482/files/1383185611092.jpg?v=1487090221"
  );

  const [opc, setopc] = useState(0);
  const [hrt, setHrt] = useState(0);
  const [optValue, setOptValue] = useState([]);
  const [optArray, setOptArray] = useState([]);
  const [sum, setSum] = useState(0);
  const option1Ref = useRef();
  const priceRef = useRef([]);

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  useEffect(() => {
    dispatch(getDetail());
  }, [dispatch]);

  const onClick = React.useCallback((e) => {
    e.preventDefault();
    const img = e.target;
    setUrlImg(img.src);

    const value = e.target.dataset.value;
    if (value === "0") {
      setopc(0);
    } else if (value === "1") {
      setopc(1);
    } else if (value === "2") {
      setopc(2);
    } else if (value === "3") {
      setopc(3);
    } else {
      setopc(4);
    }
  }, []);

  const handleLike = React.useCallback(
    (e) => {
      e.preventDefault();
      hrt === 0 ? setHrt(1) : setHrt(0);
    },
    [hrt]
  );

  /* 삭제 버튼에 대한 이벤트 */
  const onDelete = React.useCallback(
    (e) => {
      e.preventDefault();

      if (window.confirm("선택하신 상품을 삭제하시겠습니까?") === true) {
        let deleteArray = cloneDeep(optArray);
        deleteArray.splice(e.target.dataset.num, 1);
        setOptArray(deleteArray);
        setOptValue(deleteArray);
      }
    },
    [optArray]
  );

  const message = React.useCallback(
    (e) => {
      e.preventDefault();

      if (optArray.length === 0) {
        if (option1Ref.current.value === "") {
          window.alert("[색상]을 선택하세요.");
        } else if (option1Ref.current.value !== "") {
          window.alert("[사이즈]을 선택하세요.");
        }
      } else if (e.target.dataset.alert === "cart") {
        let answer = window.confirm(
          "선택하신 상품들이 정상적으로 장바구니에 담겼습니다. \n지금 장바구니함으로 이동하시겠습니까?"
        );
        if (answer === true) {
          /* 장바구니함으로 이동하는 것으로 바꿀 것 */
          navigate("/");
        }
      } else {
        /* 결제페이지로 이동하는 것으로 바꿀 것 */
        navigate("/");
      }
    },
    [optArray, navigate]
  );

  const onSelectChange = React.useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;
      let price = current.dataset.price;
      // let num = document.querySelector(".countNum").value;

      // 전체 dropdown의 수(배열길이)
      /*  잊지 말기 !! index + 1 = length */
      const size = Array.from(current.parentNode.children).length;

      // 이벤트가 발생한 dropdown의 index
      let indexInParent = Array.from(current.parentNode.children).indexOf(
        current
      );

      // 마지막 항목이 아닐 경우?
      if (indexInParent + 1 < size) {
        // 전체 드롭다운에 대해 순서대로 반복하면서...
        Array.from(document.querySelectorAll(".optDropdown")).forEach(
          (v, i) => {
            // 이벤트가 발생한 항목 이후의 dropdown의 선택 상태를 리셋
            if (i > indexInParent) {
              v.selectedIndex = 0;
            }
          }
        );

        // 이벤트 핸들러 함수 강제 종료.
        return;
      }

      // ------------------ 이 아래가 실행된다는 것은 맨 마지막 드롭다운이 실행되었다는 의미 ----------------

      // 생성해야 할 json 객체 구조
      const newItem = {};

      Array.from(document.querySelectorAll(".optDropdown")).forEach((v, i) => {
        newItem[v.name] = v[v.selectedIndex].value;
      });

      newItem.price = price;
      newItem.num = "1";

      /* concat의 메서드는 배열이 아닌 값도 넣을 수 있다 */
      const result = optValue.concat(newItem);

      setOptValue(result);
      setOptArray([...new Set(result.map(JSON.stringify))].map(JSON.parse));
    },

    [optValue]
  );

  /* 수량조절 이벤트 */

  const onQuantity = React.useCallback(
    (e) => {
      e.preventDefault();

      // input의 value(숫자값)을 가져온다
      let num = e.target.value;

      // 깊은 복사
      let copyOptArray = cloneDeep(optArray);

      // 해당 배열 안에 num(key) value에 숫자값을 넣어준다.
      let selectedArray = copyOptArray[e.target.dataset.index];
      selectedArray.num = num;

      // 해당 배열의 price에 num 곱하기 price한 가격을 넣어준다.
      let numberPrice = document
        .querySelector(".optDropdown")
        .dataset.price.split(",")
        .join("")
        .trim();

      let realPrice = numberPrice * num;

      // ,(콤마) 찍어주기
      selectedArray.price = realPrice.toLocaleString();

      setOptValue(copyOptArray);
      setOptArray(copyOptArray);

      // state값을 쓸 수 없기 때문에(다른 경우의 선택값이랑 같이 변하기 떄문) 직접 값을 넣어줘야 함
      priceRef.current[e.target.dataset.index].innerHTML =
        optArray[e.target.dataset.index].price;

      // console.log(optArray);
      // console.log(optValue);

      // 합계값(sum) 넣어주기
      let total = 0;

      for (let i = 0; i < optArray.length; i++) {
        total += Number(
          priceRef.current[i].innerHTML.split(",").join("").trim()
        );
      }
      setSum(total.toLocaleString());
    },
    [optArray]
  );

  /* 합계값 관련(optArray의 배열 수가 증가할 때마다 합계에 적용되어야 함) */
  useEffect(() => {
    let total = 0;

    for (let i = 0; i < optArray.length; i++) {
      total += Number(priceRef.current[i].innerHTML.split(",").join("").trim());
    }
    setSum(total.toLocaleString());
  }, [optArray]);

  return (
    <Div>
      <Spinner visible={loading} />
      {error ? (
        <Error error={error} />
      ) : (
        <First>
          <div className="img">
            <div className="swiper-main">
              <img src={urlImg} alt="thumbnail" />
            </div>
            <div>
              <ul className="swiper-gallery ">
                {/* ajax 처리 부분 추후 수정해야 함 */}
                <li>
                  <img
                    onClick={onClick}
                    data-value="0"
                    className={opc === 0 ? "op" : ""}
                    src="https://cdn.shopify.com/s/files/1/1071/7482/files/1383185611092.jpg?v=1487090221"
                    alt="thumbnail"
                  />
                </li>
                <li>
                  <img
                    className={opc === 1 ? "op" : ""}
                    data-value="1"
                    onClick={onClick}
                    src="http://www.joseilbo.com/gisa_img/16372825251637282525_pabw.jpg"
                    alt="thumbnail"
                  />
                </li>
                <li>
                  <img
                    className={opc === 2 ? "op" : ""}
                    data-value="2"
                    onClick={onClick}
                    src="https://cdn.shopify.com/s/files/1/1071/7482/products/450g_grande.jpg?v=1473961315"
                    alt="thumbnail"
                  />
                </li>
                <li>
                  <img
                    className={opc === 3 ? "op" : ""}
                    data-value="3"
                    onClick={onClick}
                    src="https://cdn.shopify.com/s/files/1/1071/7482/products/300_grande.jpg?v=1528415349"
                    alt="thumbnail"
                  />
                </li>
                <li>
                  <img
                    className={opc === 4 ? "op" : ""}
                    data-value="4"
                    onClick={onClick}
                    src="https://cdn.shopify.com/s/files/1/1071/7482/products/cj_brown_12pc_grande.jpeg?v=1460716782"
                    alt="thumbnail"
                  />
                </li>
              </ul>
            </div>
          </div>
          {data &&
            data.item.map((v, i) => {
              let color = [v.opt1];
              let size = [v.opt2];

              let opt1 = color[0] !== null ? color[0].split(",") : null;
              let opt2 = size[0] !== null ? size[0].split(",") : null;

              let cnt = parseInt(0);
              if (v.star) {
                cnt++;
              }
              return (
                <div className="des" key={i}>
                  <ul>
                    <h1>{v.title}</h1>
                  </ul>
                  <ul>
                    <li>
                      <h1>
                        <b>
                          <span>{v.price}</span>원
                        </b>
                      </h1>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      {[...new Array(v.star)].map((v, i) => {
                        return <i className="fa fa-star" key={i}></i>;
                      })}
                      {[...new Array(5 - v.star)].map((v, i) => {
                        return (
                          <i
                            className="fa fa-star"
                            key={i}
                            style={{ color: "lightgray" }}
                          ></i>
                        );
                      })}
                    </li>
                    <li className="reviewAmount">
                      <a href="#review">
                        <b>{cnt}</b>개 리뷰 보기
                      </a>
                    </li>
                    <li>
                      <b>{v.sales}</b>개 구매중
                    </li>
                  </ul>
                  <ul>
                    <li>배송정보</li>
                    <li>
                      <b>일반배송</b>
                    </li>
                    <li>무료배송 / 3000원</li>
                  </ul>
                  <ul>
                    <li>정품인증</li>
                    <li style={{ color: "gray" }}>
                      CPLY의 모든 상품은 100% 정품입니다.
                    </li>
                  </ul>
                  <ul className="dropdown">
                    <form>
                      <select
                        name="color"
                        data-price={v.price}
                        onChange={onSelectChange}
                        style={{ display: opt1 === null && "none" }}
                        className="option1 optDropdown"
                        ref={option1Ref}
                      >
                        <option value="">[색상]을 선택하세요</option>
                        {opt1 &&
                          opt1.map((v, i) => {
                            return (
                              <option value={v} key={i}>
                                {v}
                              </option>
                            );
                          })}
                      </select>
                      <select
                        name="size"
                        data-price={v.price}
                        onChange={onSelectChange}
                        className="optDropdown"
                        style={{ display: opt2 === null && "none" }}
                        disabled={option1Ref.current === undefined && true}
                      >
                        <option value="">[사이즈]를 선택하세요</option>
                        {opt2 &&
                          opt2.map((v, i) => {
                            return (
                              <option value={v} key={i}>
                                {v}
                              </option>
                            );
                          })}
                      </select>
                    </form>
                  </ul>
                  <div className="select-result">
                    {optArray &&
                      optArray.map((v, i) => {
                        return (
                          <div className="amount" key={i}>
                            <ul className="firstUi">
                              <li>
                                <b>{v.color}</b>
                                &nbsp; &nbsp; &nbsp;
                                <b>{v.size}</b>
                              </li>
                              <li className="button" data-num={i}>
                                <button
                                  type="button"
                                  data-alert="xmark"
                                  data-num={i}
                                  onClick={onDelete}
                                >
                                  삭제
                                </button>
                              </li>
                            </ul>
                            <ul className="secondUi">
                              <li className="count">
                                <input
                                  name="quantity"
                                  data-index={i}
                                  onClick={onQuantity}
                                  className="countNum"
                                  type="number"
                                  defaultValue="1"
                                  min="1"
                                  max="20"
                                />
                              </li>
                              <li>
                                <h4>
                                  <span>
                                    <b ref={(e) => (priceRef.current[i] = e)}>
                                      {v.price}
                                    </b>
                                  </span>
                                  원
                                </h4>
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                  </div>
                  <ul className="price">
                    <li>
                      <h2>총 상품 금액</h2>
                    </li>
                    <li>
                      <h1 style={{ color: "#ff204b" }} className="won">
                        <b>{sum}</b>
                        <p>원</p>
                      </h1>
                    </li>
                  </ul>
                  <ul className="pay">
                    <li className="buy">
                      <button type="submit" onClick={message}>
                        바로구매
                      </button>
                    </li>
                    <li className="cart">
                      <button type="submit" onClick={message} data-alert="cart">
                        <i
                          className="fa fa-shopping-cart"
                          data-alert="cart"
                        ></i>
                      </button>
                    </li>
                    <li className="heart">
                      <button type="submit" onClick={handleLike}>
                        <FontAwesomeIcon
                          icon={hrt === 0 ? regularHeart : solidHeart}
                          style={{ color: hrt === 0 ? " " : "#ff204b" }}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
        </First>
      )}
    </Div>
  );
};

export default React.memo(DetailGoods);
