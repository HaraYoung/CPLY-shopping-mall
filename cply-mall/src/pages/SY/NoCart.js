/**
 * @filename: NoCart.js
 * @description: 장바구니 페이지- 담긴 상품이 없는 경우
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NoCartArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em 0;
  a {
    text-decoration: none;
    color: #000;
    background-color: gainsboro;
    padding: 0.5em 1.5em;
    border-radius: 4px;
    &:hover {
      color: #fff;
      background-color: gray;
    }
  }
`;

const NoCart = memo(() => {
  return (
    <NoCartArea>
      <FontAwesomeIcon icon={faCartShopping} size="4x" />
      <h3>장바구니에 상품을 담아보세요.</h3>
      <NavLink to="/">쇼핑 계속하기</NavLink>
    </NoCartArea>
  );
});

export default NoCart;
