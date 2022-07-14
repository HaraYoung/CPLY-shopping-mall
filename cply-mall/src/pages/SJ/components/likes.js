import React, { useState } from "react";
import styled from "styled-components";
import List from "./listItem";

const Favor = styled.div`
  display: flex;
  padding: 4em 1em;
  .side {
    margin-right: 2em;
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
        margin: 0.1em 0;
        line-height: 2.5em;
        a {
          padding-left: 1em;
          display: block;
          color: #696969;
          height: 2.7em;
          display: block;
          &:hover {
            color: black;
            background-color: #e1e1e1;
          }
        }
        .option {
          background-color: #e1e1e1;
          color: black;
        }
      }
    }
  }
  .content {
    width: 80%;

    div:nth-child(1) {
      margin-bottom: 0.5em;
      display: flex;
      justify-content: end;
      select {
        padding: 0.3em 1em;
        border: 1px solid #e1e1e1;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

const Likes = () => {
  const [imj, setImj] = useState(0);
  const [op, setOp] = useState(0);

  const onClick = React.useCallback(
    (e) => {
      e.preventDefault();
      if (imj === 0) {
        setImj(1);
      } else {
        setImj(0);
      }
    },
    [imj]
  );

  const onOption = React.useCallback((e) => {
    e.preventDefault();
    const value = e.target.dataset.value;
    if (value === "0") {
      setOp(0);
    } else if (value === "1") {
      setOp(1);
    } else if (value === "2") {
      setOp(2);
    } else if (value === "3") {
      setOp(3);
    } else if (value === "4") {
      setOp(4);
    } else {
      setOp(5);
    }
  }, []);

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
          <div className="category" onClick={onClick}>
            <div>CATEGORIES</div>
            <i
              className={imj === 0 ? "fa fa-angle-up" : "fa fa-angle-down"}
            ></i>
          </div>
          <ul style={{ display: imj === 0 ? "" : "none" }}>
            <li>
              <a
                href="#!"
                onClick={onOption}
                data-value="0"
                className={op === 0 ? "option" : ""}
              >
                전체
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={onOption}
                data-value="1"
                className={op === 1 ? "option" : ""}
              >
                아우터
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={onOption}
                data-value="2"
                className={op === 2 ? "option" : ""}
              >
                상의
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={onOption}
                data-value="3"
                className={op === 3 ? "option" : ""}
              >
                하의
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={onOption}
                data-value="4"
                className={op === 4 ? "option" : ""}
              >
                신발
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={onOption}
                data-value="5"
                className={op === 5 ? "option" : ""}
              >
                악세사리
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div>
          <select>
            <option>최근 찜한순</option>
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
