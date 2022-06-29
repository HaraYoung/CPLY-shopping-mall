import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import { ChevronDown, RightArrow, RightArrowDouble } from "../icons";

const QnaMain = () => {
  return (
    <>
      <SideNav />

      <div>
        <div>
          <h3>자주 묻는 질문</h3>
        </div>

        {/* 카테고리 */}
        <div>
          <ul>
            <li>
              <Link to="/">전체</Link>
            </li>
            <li>
              <Link to="/">이용정책</Link>
            </li>
            <li>
              <Link to="/">공통</Link>
            </li>
            <li>
              <Link to="/">구매</Link>
            </li>
            <li>
              <Link to="/">판매</Link>
            </li>
          </ul>
        </div>
        {/* 카테고리 끝*/}

        <div>
          <ul>
            <li>
              <div>
                <strong>이용정책</strong>
                <div>
                  <p>페널티 정책</p>
                </div>
                <button
                  style={{
                    width: "24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <ChevronDown />
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Page Number */}
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
    </>
  );
};

export default QnaMain;
