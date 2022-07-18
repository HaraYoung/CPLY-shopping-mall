import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MyPageMenuCSS = styled.div`
  margin: 0 3% 0 5%;
  display: flex;
  height: 1000px;
  .my-page-box1 {
    width: 300px;
    background-color: #000;
    color: #fff;
    .menu {
      width: 80%;
      margin: auto;
      > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        .list {
          padding: 7px 0;
          > a {
            padding: 3px;
            color: #fff;
            &:hover {
              background: #fff;
              color: #000;
              border-radius: 3px;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }
`;

const MyPageMenu = () => {
  return (
    <MyPageMenuCSS>
      <div className="my-page-box1">
        <div className="menu">
          <h1>My Page</h1>
          <ul>
            <li>
              <h2>내정보</h2>
            </li>
            <li className="list">
              <Link to="/mypage/">프로필 정보</Link>
            </li>
            <li className="list">
              <Link to="changeinfo">나의 정보 수정</Link>
            </li>
            <li className="list">
              <Link to="secession">회원 탈퇴</Link>
            </li>
            <li>
              <h2>쇼핑 정보</h2>
            </li>
            <li className="list">
              <Link to="order">주문내역조회</Link>
            </li>
            <li className="list">
              <Link to="rande">취소/반품</Link>
            </li>
            <li className="list">
              <Link to="cart">장바구니</Link>
            </li>
            <li className="list">
              <Link to="likes">찜한 상품</Link>
            </li>
            <li className="list">
              <a>작성 리뷰</a>
            </li>
            <li>
              <h2>고객센터</h2>
            </li>
            <li className="list">
              <Link to="/Qna">내 문의 내역</Link>
            </li>
            <li className="list">
              <Link to="/faq">FAQ(자주묻는질문)</Link>
            </li>
            <li className="list">
              <Link to="/notice">공지사항</Link>
            </li>
          </ul>
        </div>
      </div>
    </MyPageMenuCSS>
  );
};

export default MyPageMenu;
