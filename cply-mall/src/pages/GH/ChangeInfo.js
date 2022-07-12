import React, { memo } from "react";
import styled from "styled-components";
import RegexHelper from "../../libs/RegexHelper";

const ChangeInfoCss = styled.div`
  width: 100%;
  > h1 {
    padding-bottom: 1%;
    border-bottom: 3px solid #ccc;
  }
  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4%;
    > button {
      padding: 1% 5%;
      border-radius: 5px;
      background-color: #000;
      color: #fff;
      font-size: 1em;
      margin-top: 3%;
      cursor: pointer;
      border: 2px solid #000;
      display: block;
      &:hover {
        background: #fff;
        color: #000;
        transition: all 0.4s ease-in-out;
      }
    }
    > .signup-info-div-box {
      display: flex;
      margin-bottom: 4%;
      align-items: center;
      > .signup-info-div1 {
        width: 25%;
        > h2 {
          margin: 0;
          font-size: 18px;
          > span {
            color: #e74c3c;
          }
        }
      }
      .signup-info-div2 {
        width: 45%;
        input {
          width: 90%;
          padding: 2%;
          border-radius: 5px;
        }
      }
      .signup-info-div3 {
        width: 20%;
        > span {
          background: #000;
          font-size: 0.9em;
          margin: 0;
          padding: 4% 5%;
          color: #fff;
          border: 2px solid #000;
          border-radius: 5px;
          &:hover {
            background: #fff;
            color: #000;
            transition: all 0.4s ease-in-out;
          }
        }
      }
    }
  }
`;
const ChangeInfo = memo(() => {
  const [pwChangeButton,setPwChangeButton] = React.useState(false);

  const ChangeButton = React.useCallback(()=> {
    setPwChangeButton(pwChangeButton=>!pwChangeButton);
  },[]);

  const ChangeInfoSubmit = React.useCallback((e)=> {
    e.preventDefault();
    const current = e.target;
    try {
        //비밀번호 수정 유효성
        if (pwChangeButton) {

          //비밀번호 유효성
          /**
           * 특수문자유효성추가해야함
           * */

          //현재비밀번호
          RegexHelper.value(current.nowpw,'현재 비밀번호는 필수 정보입니다');
          RegexHelper.minLength(current.nowpw,8,'현재 비밀번호를 다시 확인해주세요');
          RegexHelper.maxLength(current.nowpw,20,'현재 비밀번호를 다시 확인해주세요');
          //새로운비밀번호
          RegexHelper.value(current.newpw1,'비밀번호는 필수 정보입니다');
          RegexHelper.minLength(current.newpw1,8,'현재 비밀번호를 다시 확인해주세요');
          RegexHelper.maxLength(current.newpw1,20,'현재 비밀번호를 다시 확인해주세요');
          //새로운 비밀번호 확인
          RegexHelper.value(current.newpw2,'새로운 비밀번호 확인은 필수 정보입니다');
          RegexHelper.value(current.newpw1,current.newpw2,'비밀번호가 일치하지 않습니다');
        }

        //전화번호 유효성
        RegexHelper.value(current.phone,'전화번호는 필수 정보입니다');
        RegexHelper.num(current.phone,'전화번호는 숫자만 입력 가능합니다');
        RegexHelper.minLength(current.phone,10,'전화번호는 10자 부터 입력 가능합니다');
        RegexHelper.maxLength(current.phone,11,'전화번호는 11자 까지만 입력 가능합니다');
        //이메일 유효성
        RegexHelper.value(current.email,'이메일은 필수 정보입니다');
        RegexHelper.email(current.email,'이메일 형식에 맞지않습니다');
        //주소 유효성
        /**
         * 주소검색 에이피아이 연동해야함
         */
        RegexHelper.value(current.addr,'우편번호를 입력해 주세요');
        RegexHelper.num(current.addr,'우편번호는 숫자만 입력 가능합니다');
        RegexHelper.value(current.addr1,'기본주소를 입력해 주세요');
        RegexHelper.value(current.addr2,'나머지 주소를 입력해 주세요');
    }catch(e) {
        window.alert(e.message);
        e.field.focus();
        return;
    }

    if (window.confirm('입력하신 내용으로 정보가 수정됩니다.계속하시겠습니까?')) {
        //ajax연동
        window.alert('수정이 완료되었습니다.');
    }

    
},[pwChangeButton])
  return (
    <ChangeInfoCss>
      <h1>나의 정보 수정</h1>
      <form onSubmit={ChangeInfoSubmit}>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              아이디<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="text" name="id" disabled />
          </div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              비밀번호<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="password" name="pw" disabled />
          </div>
          <div className="signup-info-div3">
        {pwChangeButton ? (
          <span onClick={ChangeButton}>비밀번호 수정 취소</span>
        ):(
          <span onClick={ChangeButton}>비밀번호 수정</span>
        )}
          </div>
        </div>
        {pwChangeButton && (
          <>
          <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              현재 비밀번호<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="password" name="nowpw"/>
          </div>
        </div>
          <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              새로운 비밀번호<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="password" name="newpw1"/>
          </div>
        </div>
          <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              새로운 비밀번호 확인<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="password" name="newpw2"/>
          </div>
        </div>
        
          </>
        )}
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              이름<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="text" name="name" disabled />
          </div>
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
            />
          </div>
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
            />
          </div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1">
            <h2>
              주소<span>*</span>
            </h2>
          </div>
          <div className="signup-info-div2">
            <input type="text" name="addr"/>
          </div>
          <div className="signup-info-div3">
            <span>주소검색</span>
          </div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1"></div>
          <div className="signup-info-div2">
            <input type="text" name="addr1"/>
          </div>
        </div>
        <div className="signup-info-div-box">
          <div className="signup-info-div1"></div>
          <div className="signup-info-div2">
            <input type="text" name="addr2"/>
          </div>
        </div>
        <button type="submit">수정하기</button>
      </form>
    </ChangeInfoCss>
  );
});

export default ChangeInfo;
