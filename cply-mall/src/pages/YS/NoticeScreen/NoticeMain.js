import { Link } from "react-router-dom";
import setnotice from "./NoticeAPI";
import { RightArrow, RightArrowDouble } from "../icons";
<<<<<<< HEAD
=======
import SideNav from "../components/SideNav";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 40px 160px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  li {
    padding: 15px 0;
    border-bottom: 1px solid #ebebeb;
  }
`;

const Pagination = styled.div``;
>>>>>>> cb9fc0ff9ebe30dfe0b4f05096ce18999aa858cb

const NoticeMain = () => {
  return (
    <Container>
      <Wrap>
        <SideNav />

        {/* Notice Main */}
        <NoticeContainer>
          <h3>공지사항</h3>
          <div>
            <ul>
              {setnotice.map((notice) => {
                return (
                  <li key={notice.id}>
                    <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </NoticeContainer>

        {/* page number */}
        <Pagination>
          <ul>
            <li>
              <Link to="/">1</Link>
            </li>
            <li>
              <Link to="/">2</Link>
            </li>
            <li>
              <Link to="/">3</Link>
            </li>
            <li>
              <Link to="/">4</Link>
            </li>
            <li>
              <Link to="/">5</Link>
            </li>
          </ul>

          <div>
            <button
              style={{
                width: "24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <RightArrow />
            </button>
            <button
              style={{
                width: "24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <RightArrowDouble />
            </button>
          </div>
        </Pagination>
      </Wrap>
    </Container>
  );
};

export default NoticeMain;
