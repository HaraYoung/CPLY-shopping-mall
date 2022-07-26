//  내가 쓴 리뷰 페이지에서 리뷰들을 나열하는 컴포넌트입니다(ajax)
import React from "react";
import styled from "styled-components";
import { faXmark as Xmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = styled.div`
  .review {
    padding: 0 1.8em;
    border-bottom: 1px solid lightgray;
    .goodsInfo {
      display: flex;
      padding: 1.5em 0;
      border-bottom: 1px solid #e1e1e1;
      .goodsImg {
        a {
          display: block;
          width: 2.5em;
          height: 2.5em;
          background-color: yellow;
        }
      }
      .goodsTitle {
        flex-direction: column;
        li:nth-child(2) {
          font-size: 0.9em;
          color: gray;
        }
      }
    }
    .ownReview {
    }
  }
`;
const reviewList = () => {
  return (
    <Review>
      <div className="review">
        <div className="goodsInfo">
          <div className="goodsImg">
            <a></a>
          </div>
          <ul className="goodsTitle">
            <li>
              <a>구매상품 제목</a>
            </li>
            <li>
              <p>옵션값</p>
            </li>
          </ul>
        </div>
        <div className="ownReview">
          <div>
            <span>
              <ul>
                <li>
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                </li>
                <li style={{ marginLeft: "0.8em" }}> 5 </li>
              </ul>
            </span>
            <span>내가 작성한 리뷰</span>
          </div>
          <div className="ownImg">
            <a></a>
          </div>
          <div>
            <div>
              <button type="button" className="fix">
                수정하기
              </button>
            </div>
            <button type="button">
              <FontAwesomeIcon icon={Xmark} />
            </button>
          </div>
        </div>
      </div>
    </Review>
  );
};

export default reviewList;
