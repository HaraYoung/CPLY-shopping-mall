import React, { memo } from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";

//Slice에 정의된 액션함수들 참조
import { RAndEText } from "../../slices/SY/basicsSlice"; //상태값을 갱신하는 함수들

//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";

import Exchange from "./Exchange";
import Refund from "./Refund";

const TabEAndR = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
    padding: 10px;
    border-bottom: 2px solid black;
    margin: 3em;
    &:hover {
      background-color: gainsboro;
    }
  }
`;

const Notice = styled.div`
  color: red;
  font-size: 14px;
  font-weight: bold;
  padding: 1em 2em;
`;
const RandE = memo(() => {
  //dispatch함수 생성
  const dispatch = useDispatch();
  //hook를 통해 slice가 관리하는 상태값 가져오기
  const { RAndEstate } = useSelector((state) => state.orderState);

  const [notice, setNotice] = React.useState("교환");
  const onClickTab = () => {
    //교환탭일때와 반품 탭일때의 다른 단어 출력- url감지?
  };

  return (
    <div>
      <TabEAndR>
        <NavLink to="/mypage/rande">교환</NavLink>
        <NavLink to="refund">반품</NavLink>
      </TabEAndR>
      <Notice>
        <p>{RAndEstate}시 공지 사항</p>
        <p>{RAndEstate}시 주의 사항</p>
      </Notice>
      <Routes>
        <Route path="/" element={<Exchange />} expat={true} />
        <Route path="refund" element={<Refund />} />
      </Routes>
    </div>
  );
});

export default RandE;
