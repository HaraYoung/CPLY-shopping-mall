import React from "react";
import { NavLink } from "react-router-dom";

// CSS적용을 위한 컴포넌트
import styled from "styled-components";

const Div = styled.div`
  margin: auto;
  padding: 150px;
`;
const First = styled.section`
  display: flex;
  .img {
    width: 25%;
    margin-right: 3em;
    .swiper-main {
      height: 25em;
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
        margin: 0;
        cursor: pointer;
      }
    }
  }
  .des {
    width: 75%;
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
    ul:nth-child(1),
    ul:nth-child(3),
    ul:nth-child(4),
    ul:nth-child(5),
    ul:nth-child(6) {
      justify-content: flex-start;
      li {
        margin-right: 1em;
      }
    }
  }
  ul:nth-child(3) {
    li:nth-child(1),
    li:nth-child(2) {
      font-size: 1.5em;
    }
    li:nth-child(3) {
      font-size: 1em;
      color: gray;
      line-height: 4em;
      text-decoration: line-through;
    }
  }
  ul:nth-child(5) {
    border-top: 0.2em solid lightgray;
    border-bottom: 0.2em solid lightgray;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  ul:nth-child(6) {
    padding-top: 1em;
  }
  .dropdown {
    width: 65%;
    form {
      max-width: 100%;
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
  const [urlImg, setUrlImg] = React.useState(
    "https://cdn.shopify.com/s/files/1/1071/7482/files/1383185611092.jpg?v=1487090221"
  );

  const onClick = () => {
    setUrlImg();
  };
  return (
    <Div>
      <First>
        <div className="img">
          <div className="swiper-main">
            <img src={urlImg} alt="thumbnail" />
          </div>
          <div>
            <ul className="swiper-gallery ">
              {/* ajax 처리 부분 추후 수정해야 함 */}
              <li
                style={{
                  background:
                    "url(https://cdn.shopify.com/s/files/1/1071/7482/files/1383185611092.jpg?v=1487090221) no-repeat center",
                  backgroundSize: "cover",
                }}
                onClick={onClick}
              >
                <img
                  src={
                    "https://cdn.shopify.com/s/files/1/1071/7482/files/1383185611092.jpg?v=1487090221"
                  }
                  alt="thumbs"
                />
              </li>
              <li
                style={{
                  background:
                    "url(http://www.joseilbo.com/gisa_img/16372825251637282525_pabw.jpg) no-repeat center",
                  backgroundSize: "contain",
                }}
                onClick={onClick}
              />
              <li
                style={{
                  background:
                    "url(https://cdn.shopify.com/s/files/1/1071/7482/products/450g_grande.jpg?v=1473961315) no-repeat center",
                  backgroundSize: "cover",
                }}
                onClick={onClick}
              />
              <li
                style={{
                  background:
                    "url(https://cdn.shopify.com/s/files/1/1071/7482/products/300_grande.jpg?v=1528415349) no-repeat center",
                  backgroundSize: "contain",
                }}
                onClick={onClick}
              />
              <li
                style={{
                  background:
                    "url(https://cdn.shopify.com/s/files/1/1071/7482/products/cj_brown_12pc_grande.jpeg?v=1460716782) no-repeat center",
                  backgroundSize: "contain",
                }}
                onClick={onClick}
              />
            </ul>
          </div>
        </div>
        <div className="des">
          <ul style={{ fontSize: "1.3em", cursor: "pointer" }}>
            <li>
              <i className="fa fa-home"></i>
            </li>
            <li>브랜드명</li>
            <li>&#62;</li>
            <li></li>
          </ul>
          <ul>
            <h1>제품명</h1>
          </ul>
          <ul>
            <li style={{ color: "#ff204b" }}>
              <h1>
                <b>0%</b>
              </h1>
            </li>
            <li>
              <h1>
                <b>할인적용된가격</b>
              </h1>
            </li>
            <li>
              <h3>
                <b>할인적용전가격</b>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
            </li>
            <li>
              <NavLink to="#">0개 리뷰 보기</NavLink>
            </li>
            <li>0개 구매중</li>
            <li>도착 예정일</li>
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
          <ul class="dropdown">
            <form>
              <select>
                <option value="none">[컬러]를 선택하세요</option>
              </select>
              <select>
                <option value="none">[사이즈]를 선택하세요</option>
              </select>
            </form>
          </ul>
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
              <button>
                <i className="fa fa-shopping-cart"></i>
              </button>
            </li>
            <li className="heart">
              <button>
                <i className="fa fa-heart"></i>
              </button>
            </li>
          </ul>
        </div>
      </First>
    </Div>
  );
};

export default React.memo(DetailGoods);
