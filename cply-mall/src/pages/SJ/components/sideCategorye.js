//  카테고리에서 링크 클릭 후 반환도니는 검색 결과 중 사이드에 해당되는 부분입니다.
import React from "react";
import styled from "styled-components";

const Side = styled.div`
  width: 20%;
  margin-right: 1em;
  div:nth-child(1) {
    padding: 0.5em 1em;
  }
`;
const sideCategorye = () => {
  return (
    <Side>
      <div>
        <h3>CATEGORIES</h3>
      </div>
      <div>
        <div>
          <div>
            <h5>아우터</h5>
          </div>
          <div>
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
          <div>
            <h5>상의</h5>
          </div>
          <div>
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
          <div>
            <h5>하의</h5>
          </div>
          <div>
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
          <div>
            <h5>신발</h5>
          </div>
          <div>
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
          <div>
            <h5>악세사리</h5>
          </div>
          <div>
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

export default sideCategorye;
