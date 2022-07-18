//  카테고리에서 링크 클릭 후 반환도니는 검색 결과 중 사이드에 해당되는 부분입니다.
import React, { useState } from "react";
import styled from "styled-components";

const Side = styled.div`
  width: 20%;
  margin-right: 2em;
  .title {
    padding: 0.5em 1em;
  }
  .option {
    .class {
      position: relative;
      display: block;
      font-size: 1.2em;
      font-weight: 500;
      width: 100%;
      padding: 0.5em 1em;
      border-top: 1px solid lightgray;

      i {
        position: absolute;
        right: 0;
        font-size: 1.4em;
        padding-right: 0.5em;
      }
    }
    .last {
      border-bottom: 1px solid lightgray;
    }
    .op_list {
      border-top: 1px solid lightgray;
      ul {
        padding: 0.5em 0;
        margin: 0;
        li {
          padding-left: 1em;
          height: 2.5em;
          line-height: 2.5em;
          &:hover {
            background-color: #e1e1e1;
          }
          a {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
`;
const SideCategory = () => {
  const [hide1, setHide1] = useState(0);
  const [hide2, setHide2] = useState(0);
  const [hide3, setHide3] = useState(0);
  const [hide4, setHide4] = useState(0);
  const [hide5, setHide5] = useState(0);

  const hiddenList = React.useCallback(
    (e) => {
      e.preventDefault();
      const data = e.target.dataset.hide;
      if (data === "1") {
        hide1 === 0 ? setHide1(1) : setHide1(0);
      } else if (data === "2") {
        hide2 === 0 ? setHide2(1) : setHide2(0);
      } else if (data === "3") {
        hide3 === 0 ? setHide3(1) : setHide3(0);
      } else if (data === "4") {
        hide4 === 0 ? setHide4(1) : setHide4(0);
      } else if (data === "5") {
        hide5 === 0 ? setHide5(1) : setHide5(0);
      }
    },
    [hide1, hide2, hide3, hide4, hide5]
  );

  return (
    <Side>
      <div className="title">
        <h3>CATEGORIES</h3>
      </div>
      <div className="option">
        <div>
          <a href="#!" className="class" data-hide="1" onClick={hiddenList}>
            아우터
            <i
              data-hide="1"
              onClick={hiddenList}
              className={hide1 === 0 ? "fa fa-angle-down" : "fa fa-angle-up"}
            ></i>
          </a>
          <div
            className="op_list"
            style={{ display: hide1 === 0 ? "none" : "" }}
          >
            <ul>
              <li>
                <a href="#!">후드 집업</a>
              </li>
              <li>
                <a href="#!">무스탕/퍼</a>
              </li>
              <li>
                <a href="#!">코트</a>
              </li>
              <li>
                <a href="#!">재킷</a>
              </li>
              <li>
                <a href="#!">가디건</a>
              </li>
              <li>
                <a href="#!">패딩</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a href="#!" className="class" data-hide="2" onClick={hiddenList}>
            상의
            <i
              data-hide="2"
              onClick={hiddenList}
              className={hide2 === 0 ? "fa fa-angle-down" : "fa fa-angle-up"}
            ></i>
          </a>
          <div
            className="op_list"
            style={{ display: hide2 === 0 ? "none" : "" }}
          >
            <ul>
              <li>
                <a href="#!">티셔츠</a>
              </li>
              <li>
                <a href="#!">셔츠/남방</a>
              </li>
              <li>
                <a href="#!">블라우스</a>
              </li>
              <li>
                <a href="#!">니트/스웨터</a>
              </li>
              <li>
                <a href="#!">후드</a>
              </li>
              <li>
                <a href="#!">맨투맨</a>
              </li>
              <li>
                <a href="#!">나시</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a href="#!" className="class" data-hide="3" onClick={hiddenList}>
            하의
            <i
              data-hide="3"
              onClick={hiddenList}
              className={hide3 === 0 ? "fa fa-angle-down" : "fa fa-angle-up"}
            ></i>
          </a>
          <div
            className="op_list"
            style={{ display: hide3 === 0 ? "none" : "" }}
          >
            <ul>
              <li>
                <a href="#!">청바지</a>
              </li>
              <li>
                <a href="#!">슬랙스</a>
              </li>
              <li>
                <a href="#!">면바지</a>
              </li>
              <li>
                <a href="#!">반바지</a>
              </li>
              <li>
                <a href="#!">트레이닝</a>
              </li>
              <li>
                <a href="#!">조거</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a href="#!" className="class" data-hide="4" onClick={hiddenList}>
            신발
            <i
              data-hide="4"
              onClick={hiddenList}
              className={hide4 === 0 ? "fa fa-angle-down" : "fa fa-angle-up"}
            ></i>
          </a>
          <div
            className="op_list"
            style={{ display: hide4 === 0 ? "none" : "" }}
          >
            <ul>
              <li>
                <a href="#!">플랫/로퍼</a>
              </li>
              <li>
                <a href="#!">샌들/슬리퍼</a>
              </li>
              <li>
                <a href="#!">힐</a>
              </li>
              <li>
                <a href="#!">스니커즈</a>
              </li>
              <li>
                <a href="#!">부츠/워커</a>
              </li>
              <li>
                <a href="#!">블로퍼/뮬</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            href="#!"
            className="last class"
            data-hide="5"
            onClick={hiddenList}
          >
            악세사리
            <i
              data-hide="5"
              onClick={hiddenList}
              className={hide5 === 0 ? "fa fa-angle-down" : "fa fa-angle-up"}
            ></i>
          </a>
          <div
            className="last op_list"
            style={{ display: hide5 === 0 ? "none" : "" }}
          >
            <ul>
              <li>
                <a href="#!">가방</a>
              </li>
              <li>
                <a href="#!">헤어악세사리</a>
              </li>
              <li>
                <a href="#!">양말/스타킹</a>
              </li>
              <li>
                <a href="#!">벨트</a>
              </li>
              <li>
                <a href="#!">시계</a>
              </li>
              <li>
                <a href="#!">모자</a>
              </li>
              <li>
                <a href="#!">스카프/머플러</a>
              </li>
              <li>
                <a href="#!">아이웨어</a>
              </li>
              <li>
                <a href="#!">장갑/워커</a>
              </li>
              <li>
                <a href="#!">목걸이</a>
              </li>
              <li>
                <a href="#!">반지</a>
              </li>
              <li>
                <a href="#!">기타</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Side>
  );
};

export default React.memo(SideCategory);
