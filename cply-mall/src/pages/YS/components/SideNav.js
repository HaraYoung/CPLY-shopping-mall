import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNav = () => {
  return (
    <div>
      <div>
        <h2>고객센터</h2>
      </div>

      <ul>
        <li>
          <Link to="/">공지사항</Link>
        </li>
        <li>
          <Link to="/faq">자주 묻는 질문</Link>
        </li>
        <li>
          <Link to="/qna">내 문의내역</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
