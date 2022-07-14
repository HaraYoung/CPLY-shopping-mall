// 이 곳은 찜한 상품 / 최근 본 상품에서 상품들을 나열할 컴포넌트입니다.
import React, { useState } from "react";
import styled from "styled-components";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
  width: 100%;
  margin-top: 2em;
  margin-bottom: 8em;
  flex-wrap: wrap;
  display: flex;

  .item {
    box-sizing: border-box;
    width: 22.3%;
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
        color: black;
        padding: 0.5em 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      ul {
        display: flex;
        padding: 0;
        li {
          color: black;
          font-size: 1.4em;
          margin-right: 0.2em;
        }
      }
    }
  }
`;

const ListItem = () => {
  // const heartRef = useRef();
  const [heart, setHeart] = useState(1);

  const toggleMenu = React.useCallback((e) => {
    setHeart((heart) => !heart);
  }, []);

  return (
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
              <strong>0원</strong>
            </li>
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
              <strong>0원</strong>
            </li>
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
              <strong>0원</strong>
            </li>
          </ul>
        </a>
      </div>
      >
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
              <strong>0원</strong>
            </li>
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
              <strong>0원</strong>
            </li>
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
              <strong>0원</strong>
            </li>
          </ul>
        </a>
      </div>
    </Item>
  );
};

export default ListItem;
