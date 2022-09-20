import React, { memo } from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";

import Exchange from "./Exchange";
import Refund from "./Refund";

const TabEAndR = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3em;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
    padding: 10px;
    border-bottom: 2px solid black;
    &:hover {
      background-color: gainsboro;
    }
  }
  .chose{
    background-color: black;
    font-size: 2em;
    color: white;
    font-weight: bold;
  }
`;

const Notice = styled.div`
  color: red;
  font-size: 14px;
  font-weight: bold;
  padding: 1em 2em;
`;
const RandE = memo(() => {

  const [notice, setNotice] = React.useState(false);
  const onClickTab = (e) => {
    //교환탭일때와 반품 탭일때의 다른 단어 출력- url감지?
    const aa=e.target.dataset.type;

    if (aa > 0) {
      setNotice(true)
    }else {
      setNotice(false)
    }
    
  };
//dispatch(RAndEText(1))
  return (
    <div>
      <TabEAndR>
        <NavLink to="/mypage/rande" data-type="0" onClick={onClickTab} className={(notice ? '' : 'chose')}>교환</NavLink>
        <NavLink to="refund" data-type="1" onClick={onClickTab} className={(notice ? 'chose' : '')}>반품</NavLink>
      </TabEAndR>
      <Notice>
        {notice ? ('반품시 주의 사항'):('교환시 주의 사항')}
      </Notice>
      <Routes>
        <Route path="/" element={<Exchange />} expat={true} />
        <Route path="refund" element={<Refund />} />
      </Routes>
    </div>
  );
});

export default RandE;
