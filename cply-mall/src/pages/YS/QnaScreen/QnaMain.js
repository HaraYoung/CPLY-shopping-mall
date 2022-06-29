import React from "react";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";

const QnaMain = () => {
  return (
    <>
      <SideNav />

      <div>
        <div>
          <h2>
            Q&A
            <span>(0)</span>
          </h2>
          <div>
            <Link to="/">내가 쓴 글보기</Link>
            <div>
              <p>문의하기</p>
            </div>
          </div>
          {/* nav */}
          <div>
            <ul>
              <li>분류</li>
              <li>처리상태</li>
              <li>내 용</li>
              <li>작성자</li>
              <li>작성일</li>
            </ul>
          </div>
          <div>
            <p>등록된 상품문의가 없습니다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QnaMain;
