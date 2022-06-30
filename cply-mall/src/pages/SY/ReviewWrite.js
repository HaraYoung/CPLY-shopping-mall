/**
 * @filename: ReviewWrite.js
 * @description: 리뷰쓰기 버튼 클릭시 나타나는 리뷰 작성 팝업
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */

import React, { memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Img from "./img/찡찡이젤리.jpg";

const RWArea = styled.div`
  position: absolute;
  top: 35%;
  left: 30%;
  width: 40%;
  background-color: gray;
  border-radius: 4px;
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5% 0;
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

const onClickCancel = () => {
  
}

const ReviewWrite = memo(() => {
  return (
    <RWArea>
      <div className="container">
        <div className="ItemInfo">
          <img src={Img} alt="itemImage" width="120px" />
          <div className="Info">
            <p>상품 이름</p>
            <p>옵션</p>
            <p>1개</p>
          </div>
        </div>
        <div className="starArea">
          <FontAwesomeIcon icon={faStar} size="lg" />
          <FontAwesomeIcon icon={faStar} size="lg" />
          <FontAwesomeIcon icon={faStar} size="lg" />
          <FontAwesomeIcon icon={faStar} size="lg" />
          <FontAwesomeIcon icon={faStar} size="lg" />
        </div>
        <div className="inputArea">
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        <div className="butArea">
          <button type="button" className="cancel">
            취소
          </button>
          <button type="button" className="register">
            리뷰 등록
          </button>
        </div>
      </div>
    </RWArea>
  );
});

export default ReviewWrite;
