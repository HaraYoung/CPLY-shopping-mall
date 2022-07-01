import React, { useState } from "react";
import styled from "styled-components";
// import "./Pagination.css";
import Pagination from "react-js-pagination";
const Div = styled.div`
  padding: 0 150px;
  .sticky-list {
    position: sticky;
    display: flex;
    justify-content: space-between;
    li {
      a {
        padding: 17px 4px 22px;
        font-size: 20px;
        font-weight: 500;
        color: black;
      }
    }
  }
  .info {
    height: 20em;
    padding: 10em;
    text-align: center;
    background-color: gray;
  }
  .review {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 16px 14px;
    ul {
      display: flex;
      li:nth-child(2),
      li:nth-child(3) {
        a::before {
          content: "|";
          padding: 0 0.6em;
        }
      }
    }
  }
  .satisfaction {
    display: flex;
    justify-content: space-between;
    margin-top: 21px;
    padding: 16px;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    background-color: #fff;
    ul {
      display: flex;
      .fa-star {
        color: #fabf14;
      }
    }
  }
  .ment {
    padding-right: 3em;
    border: 1px solid #e1e1e1;
    flex-direction: column;
    .review-top {
      .review-star {
        padding: 0;
        display: flex;
        justify-content: space-between;
        ul {
          li {
            margin-right: 0.5em;
            &:nth-child(2) {
              font-size: 0.8em;
              line-height: 1.8em;
            }
          }
        }
      }
    }
    .review-bottom {
      ul:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        li {
          margin-right: 1em;
          font-size: 0.8em;
          color: gray;
        }
      }
    }
  }
`;
const DetailBottom = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Div>
      <ul className="sticky-list">
        <li>
          <a href="#info">상품정보</a>
        </li>
        <li>
          <a href="#review">리뷰</a>
        </li>
        <li>
          <a href="#">Q&A</a>
        </li>
        <li>
          <a href="#">주문정보</a>
        </li>
      </ul>
      <div className="info" id="info">
        상품정보
      </div>
      <ul className="review" id="review">
        <li style={{ fontSize: "1.5em", fontWeight: "bold" }}>리뷰(_)</li>
        <li>
          <ul>
            <li>
              <a href="#">전체(_)</a>
            </li>
            <li>
              <a href="#">포토리뷰(_)</a>
            </li>
            <li>
              <a href="#">텍스트리뷰(_)</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="satisfaction">
        <li>만족도</li>
        <li>
          <ul>
            <li>
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
              <i className="fa fa-star"></i>&nbsp;
            </li>
            <li style={{ marginLeft: "0.8em" }}> 5 / 5 </li>
          </ul>
        </li>
      </ul>
      {/* ajax 반복처리 */}
      <div className="ment">
        <div className="review-top">
          <ul className="review-star">
            <li>
              <ul>
                <li>
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                </li>
                <li>suji*****</li>
              </ul>
            </li>
            <li>2022-06-30</li>
          </ul>
        </div>
        <div className="review-bottom">
          <ul>
            <li>165cm</li>
            <li>상의55</li>
            <li>하의66</li>
            <li>245mm</li>
            {/* 착용감 = 매우 커요/조금 커요/적당해요/조금 작아요/ 매우 작아요  */}
            <li>선택1/선택2/착용감</li>
          </ul>
          <ul>
            <li>
              <p>이곳은 구매자가 남긴 리뷰가 보여지는 곳입니다.</p>
            </li>
          </ul>
          <div className="img">
            <span>
              <img />
            </span>
          </div>
        </div>
      </div>
      <div className="ment">
        <div className="review-top">
          <ul className="review-star">
            <li>
              <ul>
                <li>
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                </li>
                <li>suji*****</li>
              </ul>
            </li>
            <li>2022-06-30</li>
          </ul>
        </div>
        <div className="review-bottom">
          <ul>
            <li>165cm</li>
            <li>상의55</li>
            <li>하의66</li>
            <li>245mm</li>
            {/* 착용감 = 매우 커요/조금 커요/적당해요/조금 작아요/ 매우 작아요  */}
            <li>선택1/선택2/착용감</li>
          </ul>
          <ul>
            <li>
              <p>이곳은 구매자가 남긴 리뷰가 보여지는 곳입니다.</p>
            </li>
          </ul>
          <div className="img">
            <span>
              <img />
            </span>
          </div>
        </div>
      </div>
      <div className="ment">
        <div className="review-top">
          <ul className="review-star">
            <li>
              <ul>
                <li>
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                  <i className="fa fa-star"></i>&nbsp;
                </li>
                <li>suji*****</li>
              </ul>
            </li>
            <li>2022-06-30</li>
          </ul>
        </div>
        <div className="review-bottom">
          <ul>
            <li>165cm</li>
            <li>상의55</li>
            <li>하의66</li>
            <li>245mm</li>
            {/* 착용감 = 매우 커요/조금 커요/적당해요/조금 작아요/ 매우 작아요  */}
            <li>선택1/선택2/착용감</li>
          </ul>
          <ul>
            <li>
              <p>이곳은 구매자가 남긴 리뷰가 보여지는 곳입니다.</p>
            </li>
          </ul>
          <div className="img">
            <span>
              <img />
            </span>
          </div>
        </div>
      </div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={50}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={handlePageChange}
      />
    </Div>
  );
};

export default DetailBottom;
