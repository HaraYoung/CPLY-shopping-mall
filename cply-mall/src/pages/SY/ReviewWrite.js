/**
 * @filename: ReviewWrite.js
 * @description: 리뷰쓰기 버튼 클릭시 나타나는 리뷰 작성 팝업
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */

import React, { memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


//import { confirmAlert } from 'react-confirm-alert';

import Img from "./img/찡찡이젤리.jpg";

//import { clickNoLastMsg } from "../../components/YorNAlert";

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
const ReviewTop= styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
margin-right: 10%;
.deleteItem{
  cursor: pointer;
}
`;
const ReviewWrite = memo(() => {
  const RWRef= React.useRef();
  const closeReview= '취소시 작성하신 내용은 저장되지 않습니다. 리뷰 작성을 취소하시겠습니까?';
  const closeURL= 'http://localhost:3000/mypage/order';
    const clickNoLastMsg= () => {
      if (window.confirm(closeReview)) {
        //url말고 리덕스로 리뷰상태값을 false로 바꾸게 만들것
          window.location.href = closeURL;
        }
  }
   const [star,setStar]= React.useState(false);
   const onStarClick= () => {setStar(!star);};
  
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
          <img src={Img} alt="itemImage" width="120px" />
          <div className="Info">
            <p>상품 이름</p>
            <p>옵션</p>
            <p>1개</p>

          </div>
        </div>
        <div className="starArea">
          <FontAwesomeIcon icon={star ? solidStar : regular} size="lg" onClick={onStarClick}/>
          {/*아이콘에 번호를 매겨 클릭시 자신보다 작은 값들도 상태 같이 변경되게 구현해야함 */}
          <FontAwesomeIcon icon={regular} size="lg" />
          <FontAwesomeIcon icon={regular} size="lg" />
          <FontAwesomeIcon icon={regular} size="lg" />
          <FontAwesomeIcon icon={regular} size="lg" />
        </div>
        <div className="inputArea">
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        <div className="butArea">
          <button type="button" className="cancel" onClick={clickNoLastMsg}>
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
