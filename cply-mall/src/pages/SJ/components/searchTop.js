//   이 곳은 검색결과에서 가장 상단부분에 해당하는 컴포넌트입니다.
import React from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  padding-top: 3em;

  div:nth-child(2) {
    margin: 1em;
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
`;
const searchTop = () => {
  return (
    <Dropdown>
      <div>
        <h4>
          <b>
            검색결과(<span></span>건)
          </b>
        </h4>
      </div>
      <div>
        <select>
          <option>추천순</option>
          <option>판매량</option>
          <option>최신순</option>
        </select>
      </div>
    </Dropdown>
  );
};

export default searchTop;
