import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// fslightbox
import FsLightbox from "fslightbox-react";

// CSS적용을 위한 컴포넌트
import styled from "styled-components";

// 싱태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";

// Slice에 정의된 액션함수들 참조
import { getDetail } from "../../slices/SJ/detailGoodsSlice";

const Div = styled.div`
  width: 1200px;
  margin: auto;
`;
const First = styled.section`
  .swiper {
    width: 30%;
    height: 45em;
    display: block;
    float: left;
    background-color: gray;
    margin-right: 3em;
  }
  div:nth-child(2) {
    flex-direction: column;
    ul {
      display: flex;
      justify-content: flex-start;
      padding-left: 0;
    }
    ul:nth-child(1),
    ul:nth-child(3),
    ul:nth-child(4),
    ul:nth-child(5),
    ul:nth-child(6) {
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
    width: 60%;
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
  .price {
    li:nth-child(1) {
      margin-right: 75%;
    }

    margin-right: 0;
  }
  .pay {
    li {
      button {
        width: 100%;
        border: none;
        cursor: pointer;
      }
    }
    .buy {
      width: 80%;
      button {
        padding: 0.5em;
        font-size: 1.5em;
        font-weight: bolder;
        background-color: #eee;
      }
    }
    .cart,
    .heart {
      width: 10%;
      margin: 0;
      button {
        padding: 0.2em;
        font-size: 1.9em;
        background-color: white;
      }
    }
  }
`;

const DetailGoods = () => {
  // 컴포넌트가 마운트 될 떄 콘솔의 모든내용을 삭제함 (출력결과가 복잡해 지는 것을 방지)
  React.useEffect(() => console.clear(), []);

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector((state) => state.detailGoods);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  const [toggler, setToggler] = useState(false);
  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  React.useEffect(() => {
    dispatch(getDetail());
  }, [dispatch]);

  return (
    <Div>
      <First>
        <div class="swiper">
          <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
          <FsLightbox
            toggler={toggler}
            sources={[
              "images/random-image.jpg",
              "https://i.imgur.com/fsyrScY.jpg",
              "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            ]}
          />
        </div>
        <div class="des">
          <ul style={{ fontSize: "1.3em", cursor: "pointer" }}>
            <li>
              <i class="fa fa-home"></i>
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
              <i class="fa fa-star"></i>&nbsp;
              <i class="fa fa-star"></i>&nbsp;
              <i class="fa fa-star"></i>&nbsp;
              <i class="fa fa-star"></i>&nbsp;
              <i class="fa fa-star"></i>&nbsp;
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
          <ul class="price">
            <li>
              <h2>총 상품 금액</h2>
            </li>
            <li>
              <h1 style={{ color: "#ff204b" }}>0원</h1>
            </li>
          </ul>
          <ul class="pay">
            <li class="buy">
              <button type="submit">바로구매</button>
            </li>
            <li class="cart">
              <button>
                <i class="fa fa-shopping-cart"></i>
              </button>
            </li>
            <li class="heart">
              <button>
                <i class="fa fa-heart"></i>
              </button>
            </li>
          </ul>
        </div>
      </First>
    </Div>
  );
};

export default React.memo(DetailGoods);
