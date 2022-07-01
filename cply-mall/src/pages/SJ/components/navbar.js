import React from "react";
import { NavLink } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      이 곳은 찜/최근 본 상품에 상단 링크를 구현할 컴포넌트 입니다
      <NavLink to="/likes">찜한 상품</NavLink>
      <NavLink to="/recent">최근 본 상품</NavLink>
    </div>
  );
};

export default navbar;
