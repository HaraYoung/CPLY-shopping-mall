import React from "react";
import styled from "styled-components";
import List from "./listItem";

const Favor = styled.div`
  display: flex;
  .side {
    width: 20%;
    h5,
    .check,
    .category {
      height: 3em;
      line-height: 3em;
      border-bottom: 1px solid #e7e7e7;
    }
    h5 {
      font-weight: bold;
    }
    .check {
      label {
        padding-left: 0.5em;
      }
    }
    .category {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      i {
        font-weight: 500;
        font-size: 1.3em;
        line-height: 2em;
        padding-right: 1em;
      }
    }
    ul {
      padding: 1em 0;
      li {
        padding-left: 1em;
        a {
          color: #696969;
          height: 2.2em;
          display: block;
        }
      }
    }
  }
`;

const Likes = () => {
  return (
    <Favor>
      <div className="side">
        <h5>상품옵션</h5>
        <div className="check">
          <input type="checkbox" id="soldOut" />
          <label htmlFor="soldOut">품절 제외</label>
        </div>
        <h5>찜한 상품</h5>
        <div className="ctg">
          <div className="category">
            <div>CATEGORIES</div>
            <i className="fa fa-angle-up"></i>
          </div>
          <ul>
            <li>
              <a href="#!">전체</a>
            </li>
            <li>
              <a href="#!">아우터</a>
            </li>
            <li>
              <a href="#!">상의</a>
            </li>
            <li>
              <a href="#!">하의</a>
            </li>
            <li>
              <a href="#!">신발</a>
            </li>
            <li>
              <a href="#!">악세사리</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div>
          <select>
            <option value="recent">최근 찜한순</option>
            <option>인기순</option>
            <option>낮은 가격순</option>
          </select>
        </div>
        {/* ajax */}
        <List />
      </div>
    </Favor>
  );
};

export default React.memo(Likes);
