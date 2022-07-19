/**
 * @filename: ReviewWrite.js
 * @description: 리뷰쓰기 버튼 클릭시 나타나는 리뷰 작성 팝업
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */

import React, { memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Img from "./img/찡찡이젤리.jpg";

const RWArea = styled.div`
  position: absolute;
  top: 35%;
  left: 30%;
  width: 50%;
  background-color: gray;
  border-radius: 4px;
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5%;
    margin-top: 3%;
    .ItemInfo {
      background-color: gainsboro;
      border-radius: 10px;
      padding: 0.5em 0;
      display: flex;
      justify-content: space-around;
      width: 50%;
      .Info {
        p {
          color: gray;
          &:first-child {
            color: #000;
          }
        }
      }
    }
    .inputArea {
      padding: 0.5em 0;
      input {
        width: 300px;
        height: 100px;
      }
    }
    .starArea {
      padding: 1em 0;
      cursor: pointer;
    }
    .butArea {
      button {
        padding: 0.5em 1em;
        margin: 2em 1em;
        border-radius: 6px;
        font-size: 15px;
        cursor: pointer;
      }
      .cancel {
        background-color: gainsboro;
        border: none;
        &:hover {
          color: #fff;
          background-color: #000;
        }
      }
      .register {
        background-color: #000;
        color: #fff;
        border: none;
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
    }
  }
`;
const ReviewTop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 10%;
  .deleteItem {
    cursor: pointer;
  }
`;
const ReviewWrite = memo(() => {
  const RWRef = React.useRef();
  const closeReview =
    "취소시 작성하신 내용은 저장되지 않습니다. 리뷰 작성을 취소하시겠습니까?";
  const closeURL = "http://localhost:3000/mypage/order";
  const clickNoLastMsg = () => {
    if (window.confirm(closeReview)) {
      //url말고 리덕스로 리뷰상태값을 false로 바꾸게 만들것
      window.location.href = closeURL;
    }
  };
  const onReviewWrite = () => {
    alert("리뷰가 등록되었습니다.");
    window.location.href = closeURL;
  };

  const [star, setStar] = React.useState(false);
  let st = [];
  let starItem = () => {
    for (let i = 0; i < 5; i++) {
      st.push(
        <FontAwesomeIcon
          key={i}
          data-key={i}
          icon={star ? solidStar : regular}
          size="lg"
          onClick={(e) => {
            if (e.target.dataset) {
              setStar(!star);
            }
          }}
        />
      );
    }
  };
  // const onStarClick = () => {
  //   st.map((v, i) => {
  //     if (v < i) setStar(!star);
  //     return star;
  //   });
  // };

  return (
    <RWArea ref={RWRef}>
      <div className="container">
        <ReviewTop>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            className="deleteItem"
            onClick={clickNoLastMsg}
          />
        </ReviewTop>
        <div className="ItemInfo">
          <img src={Img} alt="itemImage" width="80em" />
          <div className="Info">
            <p>상품 이름</p>
            <p>옵션</p>
            <p>1개</p>
          </div>
        </div>
        <div className="starArea">{starItem()}</div>
        <div className="inputArea">
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        <div className="butArea">
          <button type="button" className="cancel" onClick={clickNoLastMsg}>
            취소
          </button>
          <button type="button" className="register" onClick={onReviewWrite}>
            리뷰 등록
          </button>
        </div>
      </div>
    </RWArea>
  );
});

export default ReviewWrite;
