import React from "react";
import styled from "styled-components";
import { faXmark as Xmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecentDiv = styled.div`
  width: 100%;
  margin-top: 2em;
  margin-bottom: 8em;
  flex-wrap: wrap;
  display: flex;
  div {
    box-sizing: border-box;
    width: 23%;
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
          background-color: white;
          border: none;
          display: block;
          height: 2em;
          width: 2em;
          position: absolute;
          top: 1em;
          right: 1em;
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
        li:nth-child(1) {
          color: black;
          font-size: 1.4em;
          margin-right: 0.2em;
        }
      }
    }
  }
`;

const Recent = () => {
  return (
    <RecentDiv>
      <div>
        <a href="#!">
          <div>
            <button type="button">
              <FontAwesomeIcon icon={Xmark} />
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
      <div>
        <a href="#!">
          <div>
            <button type="button">
              <FontAwesomeIcon icon={Xmark} />
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
      <div>
        <a href="#!">
          <div>
            <button type="button">
              <FontAwesomeIcon icon={Xmark} />
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
      <div>
        <a href="#!">
          <div>
            <button type="button">
              <FontAwesomeIcon icon={Xmark} />
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
      <div>
        <a href="#!">
          <div>
            <button type="button">
              <FontAwesomeIcon icon={Xmark} />
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
    </RecentDiv>
  );
};

export default React.memo(Recent);
