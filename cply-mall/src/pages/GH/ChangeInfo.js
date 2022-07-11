import React, { memo } from "react";
import styled from "styled-components";

const ChangeInfoCss = styled.div`
  width: 100%;
  > h1 {
    padding-bottom: 1%;
    border-bottom: 3px solid #ccc;
  }
  > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    > .signup-info-div-box {
      display: flex;
      margin-bottom: 4%;
      align-items: center;
      > .signup-info-div1 {
        width: 25%;
        > h2 {
          margin: 0;
          > span {
            color: #e74c3c;
          }
        }
      }
      .signup-info-div2 {
        width: 45%;
        input {
          padding: 2%;
          border-radius: 5px;
        }
      }
    }
  }
`;
const ChangeInfo = memo(() => {
  return (
    <ChangeInfoCss>
      <h1>나의 정보 수정</h1>
      <form>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              아이디<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="text" name="id" placeholder="아이디를 입력해 주세요" />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              비밀번호<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input
              type="password"
              name="pw"
              placeholder="비밀번호를 입력해 주세요"
            />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              비밀번호 확인<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="password" name="pwre" />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              이름<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="text" name="name" placeholder="이름을 입력해 주세요" />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              전화번호<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input
              type="text"
              name="phone"
              placeholder="(-)를 제외한 전화번호"
            />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              이메일<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              주소<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="text" name="addr" placeholder="우편번호" />
          </div>
          <div className="signup-info-div3">
            <button>주소검색</button>
          </div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1"></div>
          <div className="signup-info-div2">
            <input type="text" name="addr1" placeholder="기본주소" />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1"></div>
          <div className="signup-info-div2">
            <input type="text" name="addr2" placeholder="나머지 주소" />
          </div>
          <div className="signup-info-div3"></div>
        </div>
        <button type="submit">가입하기</button>
      </form>
    </ChangeInfoCss>
  );
});

export default ChangeInfo;
