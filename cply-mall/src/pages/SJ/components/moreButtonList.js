//  더보기 버튼 컴포넌트입니다.
// import ListItem from "./listItem";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import React, { useState } from "react";

const Item = styled.div`
  width: 100%;
  margin: 2em 0;
  flex-wrap: wrap;
  display: flex;
  .item {
    margin: 0 auto;
    box-sizing: border-box;
    width: 18.6%;
    margin: 0 0.5em 1em 0.5em;
    a {
      display: block;
      width: 100%;
      div {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 14em;
        background-color: greenyellow;
        position: relative;
        button {
          background: none;
          border: none;
          display: block;
          height: 3em;
          width: 3em;
          position: absolute;
          bottom: 0;
          svg {
            font-size: 1.7em;
            color: white;
          }
          .heartButton {
            font-size: 1.7em;
            color: #ff204b;
          }
        }
      }
      h5 {
        padding: 0.5em 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      ul {
        display: flex;
        padding: 0;
        li:nth-child(1) {
          color: #ff204b;
          font-size: 1.4em;
          margin-right: 0.2em;
        }
        li:nth-child(2) {
          font-size: 1.4em;
          margin-right: 0.2em;
        }
        li:nth-child(3) {
          line-height: 2em;
          text-decoration: line-through;
          color: #757575;
        }
      }
    }
  }
`;

const Button = styled.div`
  .button {
    padding: 1.5em 0;
    button {
      margin: auto;
      display: block;
      width: 16em;
      padding: 0.7em 0;
      border: 1px solid black;
    }
  }
`;

const MoreButton = () => {
  const [heart, setHeart] = useState(1);

  const toggleMenu = React.useCallback((e) => {
    setHeart((heart) => !heart);
  }, []);

  return (
    <Button>
      <Item>
        <div className="item">
          <a href="#!">
            <div>
              <button type="button">
                <FontAwesomeIcon
                  className={heart ? "heartButton" : ""}
                  onClick={toggleMenu}
                  icon={solidHeart}
                />
              </button>
            </div>
            <h5>title</h5>
            <ul>
              <li>
                <strong>0%</strong>
              </li>
              <li>
                <strong>0원</strong>
              </li>
              <li>할인 전 가격</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <div>
              <button type="button">
                <FontAwesomeIcon
                  className={heart ? "heartButton" : ""}
                  onClick={toggleMenu}
                  icon={solidHeart}
                />
              </button>
            </div>
            <h5>title</h5>
            <ul>
              <li>
                <strong>0%</strong>
              </li>
              <li>
                <strong>0원</strong>
              </li>
              <li>할인 전 가격</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <div>
              <button type="button">
                <FontAwesomeIcon
                  className={heart ? "heartButton" : ""}
                  onClick={toggleMenu}
                  icon={solidHeart}
                />
              </button>
            </div>
            <h5>title</h5>
            <ul>
              <li>
                <strong>0%</strong>
              </li>
              <li>
                <strong>0원</strong>
              </li>
              <li>할인 전 가격</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <div>
              <button type="button">
                <FontAwesomeIcon
                  className={heart ? "heartButton" : ""}
                  onClick={toggleMenu}
                  icon={solidHeart}
                />
              </button>
            </div>
            <h5>title</h5>
            <ul>
              <li>
                <strong>0%</strong>
              </li>
              <li>
                <strong>0원</strong>
              </li>
              <li>할인 전 가격</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <div>
              <button type="button">
                <FontAwesomeIcon
                  className={heart ? "heartButton" : ""}
                  onClick={toggleMenu}
                  icon={solidHeart}
                />
              </button>
            </div>
            <h5>title</h5>
            <ul>
              <li>
                <strong>0%</strong>
              </li>
              <li>
                <strong>0원</strong>
              </li>
              <li>할인 전 가격</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <div>
              <button type="button">
                <FontAwesomeIcon
                  className={heart ? "heartButton" : ""}
                  onClick={toggleMenu}
                  icon={solidHeart}
                />
              </button>
            </div>
            <h5>title</h5>
            <ul>
              <li>
                <strong>0%</strong>
              </li>
              <li>
                <strong>0원</strong>
              </li>
              <li>할인 전 가격</li>
            </ul>
          </a>
        </div>
      </Item>
      <div className="button">
        <button>더보기</button>
      </div>
    </Button>
  );
};

export default React.memo(MoreButton);
