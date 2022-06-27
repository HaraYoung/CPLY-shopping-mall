import { Link } from "react-router-dom";
import setnotice from "./NoticeAPI";
import { RightArrow, RightArrowDouble } from "./icons";

const NoticeMain = () => {
  return (
    <div>
      {/* Sidebar */}
      <nav>
        <div>
          <h2>고객센터</h2>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">공지사항</Link>
            </li>
            <li>
              <Link to="/">자주 묻는 질문</Link>
            </li>
            <li>
              <Link to="/">검수 기준</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Sidebar End */}

      {/* Notice Main */}
      <div>
        <h3>공지사항</h3>
      </div>
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

      {/* page number */}
      <div>
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
      </div>
    </div>
  );
};

export default NoticeMain;
