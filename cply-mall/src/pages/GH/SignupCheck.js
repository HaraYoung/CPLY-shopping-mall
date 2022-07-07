import React, { memo } from "react";
import styled from "styled-components";
import RegexHelper from "../../libs/RegexHelper";
import { useNavigate } from "react-router-dom";
const SignupCss = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 0;
  .signup-check-box {
    margin: auto;
    width: 30%;
    > h1 {
      text-align: center;
      font-size: 40px;
    }
    .signup-check-box-margin {
      width: 100%;
      border-top: 3px solid #ccc;
      border-bottom: 3px solid #ccc;
      > form {
        padding: 40px 0;
        width: 100%;
        > label {
          display: block;
          font-size: 1.2rem;
          font-weight: bold;
          > input {
            vertical-align: middle;
            width: 25px;
            height: 25px;
            margin-right: 30px;
          }
        }
        > button {
          width: 100%;
          font-size: 20px;
          background-color: #e74c3c;
          color: #fff;
          padding: 10px 0;
          border: none;
          border-radius: 5px;
          margin-top: 40px;
        }
      }
    }
  }
`;

const Signup = memo(() => {
    const navigate = useNavigate();
  const SignupCheckList = [
    { id: 0, data: "[필수] 개인정보 수집 및 이용동의" },
    { id: 1, data: "[필수] CPLY 이용약관 동의" },
    { id: 2, data: "만 14세 미만 가입 제한" },
  ];

  const SignupCheckSubmit = React.useCallback((e) => {
    e.preventDefault();
    
    const current = e.target;
    
    try {
      RegexHelper.checked(current.checkall, "필수항목 동의가 필요합니다");
    } catch (e) {
      window.alert(e.message);
      return;
    }
    navigate(`/signupinfo`);
  }, []);

  const [checkedList, setCheckedList] = React.useState([]);

  const AllChecked = React.useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        SignupCheckList.forEach((v) => checkedListArray.push(v.id));
        setCheckedList(checkedListArray);
      } else {
        setCheckedList([]);
      }
    },
    [checkedList]
  );

  const CheckList = React.useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedList((checkedList) => [...checkedList, list]);
        console.log(list);
      } else {
        setCheckedList((checkedList) =>
          checkedList.filter((v) => {
            if (v !== list) {
              return true;
            } else {
              return false;
            }
          })
        );
        console.log(checkedList);
      }
    },
    [checkedList]
  );

  const asdf = React.useCallback(
    (e) => {
      AllChecked(e.target.checked);
    },
    [AllChecked]
  );

  return (
    <SignupCss>
      <div className="signup-check-box">
        <h1>C P L Y</h1>
        <div className="signup-check-box-margin">
          <form onSubmit={SignupCheckSubmit}>
            <label htmlFor="checkall">
              <input
                type="checkbox"
                name="checkall"
                onChange={(e) => AllChecked(e.target.checked)}
                checked={
                  checkedList.length === 0
                    ? ""
                    : checkedList.length === SignupCheckList.length
                    ? true
                    : ""
                }
              />
              약관 전체 동의하기
            </label>
            {SignupCheckList.map((v, i) => {
              return (
                <label key={v.id} htmlFor={`check${i}`}>
                  <input
                    key={v.id}
                    type="checkbox"
                    name={`check${i}`}
                    onChange={(e) => CheckList(e.target.checked, v.id)}
                    checked={checkedList.includes(i) ? true : false}
                  />
                  {v.data}
                </label>
              );
            })}
            <button type="submit">가입하기</button>
          </form>
        </div>
      </div>
    </SignupCss>
  );
});

export default Signup;
