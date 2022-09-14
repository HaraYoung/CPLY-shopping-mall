import React from "react";
import { Link } from "react-router-dom";
import BoardList from "./BoardList";

const MyPageMenu = () => {
  return (
    <BoardList>
      <div className="board-list-box1">
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
    </BoardList>
  );
};

export default MyPageMenu;
