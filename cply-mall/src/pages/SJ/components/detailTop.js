import React, { useState } from "react";
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
import { getDetail } from "../../slices/detailGoodsSlice";

import Spinner from "../../subComponents/Spinner";
import Error from "../../subComponents/Error";

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
  .amount {
    padding: 1em 1.8em;
    background-color: #f5f6f6;
    border-radius: 8px;
    flex-direction: column;
    li:nth-child(1) {
      ul {
        li:nth-child(2) {
          button {
            border: none;
            svg {
              font-size: 1.5em;
            }
          }
        }
      }
    }
    li:nth-child(1),
    li:nth-child(2) {
      ul {
        padding-left: 1.8em;
        justify-content: space-between;
      }
    }
  }
  .price {
    justify-content: space-between;
    margin-right: 0;
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
  React.useEffect(() => console.clear(), []);

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
  const [co, setCo] = useState(null);
  const [si, setSi] = useState(null);

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  React.useEffect(() => {
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

  const message = React.useCallback(
    (e) => {
      e.preventDefault();
      if (
        window.confirm(
          "선택하신 상품들이 정상적으로 장바구니에 담겼습니다. \n지금 장바구니함으로 이동하시겠습니까?"
        ) === true
      ) {
        navigate("/");
      }
    },
    [navigate]
  );

  const onOpt = React.useCallback((e) => {
    e.preventDefault();
    const current = e.target;
    const value = current[current.selectedIndex].value;
    const select = current.dataset.select;
    if (select === "1") {
      setCo((co) => value);
    } else {
      setSi((si) => value);
    }
  }, []);
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

              let opt1 = color ? color[0].split(",") : null;
              let opt2 = size[0] !== null ? size[0].split(",") : null;

              let cnt = parseInt(0);
              if (v.star) {
                cnt++;
              }
              return (
                <div className="des">
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
                        return <i className="fa fa-star"></i>;
                      })}
                      {[...new Array(5 - v.star)].map((v, i) => {
                        return (
                          <i
                            className="fa fa-star"
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
                      {opt1 === null ? (
                        <select disabled>
                          <option value="none">[컬러]를 선택하세요</option>
                        </select>
                      ) : (
                        <select data-select="1" onClick={onOpt}>
                          <option value="">[컬러]를 선택하세요</option>
                          {opt1.map((v, i) => {
                            return <option value={v}>{v}</option>;
                          })}
                        </select>
                      )}
                      {opt2 === null ? (
                        <select disabled>
                          <option value="none">[사이즈]를 선택하세요</option>
                        </select>
                      ) : (
                        <select data-select="2" onClick={onOpt}>
                          <option value="">[사이즈]를 선택하세요</option>
                          {opt2.map((v, i) => {
                            return <option value={v}>{v}</option>;
                          })}
                        </select>
                      )}
                    </form>
                  </ul>
                  <div className="control-amout">
                    <ul className="amount">
                      <li>
                        <ul>
                          <li>
                            <h5>
                              {co} {si}
                            </h5>
                          </li>
                          <li>
                            <button type="button">
                              <FontAwesomeIcon icon={Xmark} />
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <form>
                              <input
                                type="number"
                                defaultValue="1"
                                min="1"
                                max="20"
                              />
                            </form>
                          </li>
                          <li>
                            <h4>
                              <b>{v.price}</b>원
                            </h4>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <ul className="price">
                    <li>
                      <h2>총 상품 금액</h2>
                    </li>
                    <li>
                      <h1 style={{ color: "#ff204b" }}>0원</h1>
                    </li>
                  </ul>
                  <ul className="pay">
                    <li className="buy">
                      <button type="submit">바로구매</button>
                    </li>
                    <li className="cart">
                      <button onClick={message}>
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    </li>
                    <li className="heart">
                      <button onClick={handleLike}>
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
