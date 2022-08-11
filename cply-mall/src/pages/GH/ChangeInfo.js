import React, { memo } from "react";
import styled from "styled-components";
import RegexHelper from "../../libs/RegexHelper";
import DaumPostcode from "react-daum-postcode";
import { useDispatch, useSelector } from "react-redux";
import { getUserItem, putUserItem } from "../../slices/KH/UserSlice";
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
import dayjs from 'dayjs';
const ChangeInfoCss = styled.div`
  width: 100%;
  position: relative;
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
  .signup-modal {
    width: 420px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: 1px solid #aaa;
    &.modalNone {
      display: none;
    }
    .title-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px;
      h2 {
        margin: 0;
      }
      > img {
        width: 20px;
        height: 20px;
      }
    }
    .juso-box {
      background: #ececec;
      padding: 10px;
      .juso-box-div {
        padding: 10px;
        background-color: #fff;
        span {
          width: 40%;
          border: 1px solid #34b4eb;
          color: #34b4eb;
          font-size: 11px;
          padding: 2px 4px;
          margin-right: 5px;
        }
        > div {
          width: 100%;
          margin: 30px 0;
          input {
            width: 60%;
            border-radius: 5px;
            margin-right: 5px;
            padding: 5px 10px;
          }
          button {
            color: #fff;
            background: #000;
            border-radius: 5px;
            padding: 5px 20px;
          }
        }
      }
    }
  }
`;
const ChangeInfo = memo(() => {
  //비밀번호 수정 버튼 클릭시 나올 현재,새로운 비밀번호 div박스 상태값 박스
  const [pwChangeButton, setPwChangeButton] = React.useState(false);

  //비밀번호 수정 버튼
  const ChangeButton = React.useCallback(() => {
    setPwChangeButton((pwChangeButton) => !pwChangeButton);
  }, []);

  //나머지 주소 Ref
  const addr2tRef = React.useRef();

  //modal box 상태값
  const [modalBox, setModalBox] = React.useState(false);

  //주소검색 버튼 이벤트
  const addrSearchButton = React.useCallback(() => {
    setModalBox(true);
  }, []);

  //주소정보 상태값
  const [daumJuso, setDaumJuso] = React.useState({
    addr: "",
    addr2: "",
    zonecode: "",
    blo: false,
    state:false,
  });

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.user);

  //페이지가 마운트되면서 회원정보를 가져온다
  React.useEffect(() => {
    dispatch(
      getUserItem({
        userid: "hisaishijjo11",
        userpw: 123123123,
      })
    );
  }, [dispatch]);

  React.useEffect(()=> {
    console.log (daumJuso)
  },[daumJuso])
  //주소정보 이벤트
  const addrInfo = React.useCallback(
    (e) => {
      setDaumJuso({
        ...daumJuso,
        addr: e.address,
        zonecode: e.zonecode,
        blo: true,
        state:true
      });
    },
    [daumJuso]
  );

  //주소 정보 확인버튼 이벤트
  const addrButton = React.useCallback(() => {
    const current = addr2tRef.current;
    try {
      RegexHelper.value(current, "나머지 주소를 입력하세요");
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }
    setDaumJuso({
      ...daumJuso,
      addr2: current.value,
      blo: false,
    });
    setModalBox((modalBox) => !modalBox);
  }, [daumJuso]);

  //주소 정보 closebutton 이벤트
  const addrCloseButton = React.useCallback(() => {
    setModalBox((modalBox) => !modalBox);
    setDaumJuso({
      ...daumJuso,
      blo: false,
    });
  }, [daumJuso]);

  //유효성검사 및 ajax처리버튼
  const ChangeInfoSubmit = React.useCallback(
    (e) => {
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
          RegexHelper.value(current.nowpw, "현재 비밀번호는 필수 정보입니다");
          RegexHelper.minLength(
            current.nowpw,
            8,
            "현재 비밀번호를 다시 확인해주세요"
          );
          RegexHelper.maxLength(
            current.nowpw,
            20,
            "현재 비밀번호를 다시 확인해주세요"
          );
          //새로운비밀번호
          RegexHelper.value(current.newpw1, "비밀번호는 필수 정보입니다");
          RegexHelper.minLength(
            current.newpw1,
            8,
            "현재 비밀번호를 다시 확인해주세요"
          );
          RegexHelper.maxLength(
            current.newpw1,
            20,
            "현재 비밀번호를 다시 확인해주세요"
          );
          //새로운 비밀번호 확인
          RegexHelper.value(
            current.newpw2,
            "새로운 비밀번호 확인은 필수 정보입니다"
          );
          RegexHelper.value(
            current.newpw1,
            current.newpw2,
            "비밀번호가 일치하지 않습니다"
          );
        }

        //전화번호 유효성
        RegexHelper.value(current.phone, "전화번호는 필수 정보입니다");
        RegexHelper.num(current.phone, "전화번호는 숫자만 입력 가능합니다");
        RegexHelper.minLength(
          current.phone,
          10,
          "전화번호는 10자 부터 입력 가능합니다"
        );
        RegexHelper.maxLength(
          current.phone,
          11,
          "전화번호는 11자 까지만 입력 가능합니다"
        );
        //이메일 유효성
        RegexHelper.value(current.useremail, "이메일은 필수 정보입니다");
        RegexHelper.email(current.useremail, "이메일 형식에 맞지않습니다");
        //주소 유효성
        /**
         * 주소검색 에이피아이 연동해야함
         */
        RegexHelper.value(current.zonecode, "우편번호를 입력해 주세요");
        RegexHelper.num(current.zonecode, "우편번호는 숫자만 입력 가능합니다");
        RegexHelper.value(current.addr1, "기본주소를 입력해 주세요");
        RegexHelper.value(current.addr2, "나머지 주소를 입력해 주세요");
      } catch (e) {
        window.alert(e.message);
        e.field.focus();
        return;
      }

      if (
        window.confirm("입력하신 내용으로 정보가 수정됩니다.계속하시겠습니까?")
      ) {
        dispatch(putUserItem({
          userid:current.userid.value,
          userpw:pwChangeButton? current.newpw1.value: current.userpw.value,
          phone:current.phone.value,
          useremail:current.useremail.value,
          zonecode:current.zonecode.value,
          addr1:current.addr1.value,
          addr2:current.addr2.value,
          editdate:dayjs().format('YYYY-MM-DD HH:mm:ss')
        }))
        window.alert("수정이 완료되었습니다.");
      }
    },
    [pwChangeButton]
  );
  return (
    <ChangeInfoCss>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <>
            <h1>나의 정보 수정</h1>
            <form onSubmit={ChangeInfoSubmit}>
              <div className="signup-info-div-box">
                <div className="signup-info-div1">
                  <h2>
                    아이디<span>*</span>
                  </h2>
                </div>
                <div className="signup-info-div2">
                  <input type="text" name="userid" disabled value={data.item.userid} />
                </div>
              </div>
              <div className="signup-info-div-box">
                <div className="signup-info-div1">
                  <h2>
                    비밀번호<span>*</span>
                  </h2>
                </div>
                <div className="signup-info-div2">
                  <input type="password" name="userpw" disabled value={data.item.userpw}/>
                </div>
                <div className="signup-info-div3">
                  {pwChangeButton ? (
                    <span onClick={ChangeButton}>비밀번호 수정 취소</span>
                  ) : (
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
                      <input type="password" name="nowpw" />
                    </div>
                  </div>
                  <div className="signup-info-div-box">
                    <div className="signup-info-div1">
                      <h2>
                        새로운 비밀번호<span>*</span>
                      </h2>
                    </div>
                    <div className="signup-info-div2">
                      <input type="password" name="newpw1" />
                    </div>
                  </div>
                  <div className="signup-info-div-box">
                    <div className="signup-info-div1">
                      <h2>
                        새로운 비밀번호 확인<span>*</span>
                      </h2>
                    </div>
                    <div className="signup-info-div2">
                      <input type="password" name="newpw2" />
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
                  <input type="text" name="username" disabled value={data.item.username}/>
                </div>
              </div>
              <div className="signup-info-div-box">
                <div className="signup-info-div1">
                  <h2>
                    전화번호<span>*</span>
                  </h2>
                </div>
                <div className="signup-info-div2">
                  <input type="text" name="phone" defaultValue={data.item.phone}/>
                </div>
              </div>
              <div className="signup-info-div-box">
                <div className="signup-info-div1">
                  <h2>
                    이메일<span>*</span>
                  </h2>
                </div>
                <div className="signup-info-div2">
                  <input type="text" name="useremail" defaultValue={data.item.useremail}/>
                </div>
              </div>
              <div className="signup-info-div-box">
                <div className="signup-info-div1">
                  <h2>
                    주소<span>*</span>
                  </h2>
                </div>
                <div className="signup-info-div2">
                    <input
                    type="text"
                    name="zonecode"
                    defaultValue={daumJuso.state ? (daumJuso.zonecode) :(data.item.zonecode)}
                  />
                </div>
                <div className="signup-info-div3">
                  <span onClick={addrSearchButton}>주소검색</span>
                </div>
              </div>
              <div className="signup-info-div-box">
                <div className="signup-info-div1"></div>
                <div className="signup-info-div2">
                  <input
                    type="text"
                    name="addr1"
                    defaultValue={daumJuso.state ? (daumJuso.addr):(data.item.addr1)}
                  />
                </div>
              </div>
              <div className="signup-info-div-box">
                <div className="signup-info-div1"></div>
                <div className="signup-info-div2">
                  <input
                    type="text"
                    name="addr2"
                    defaultValue={daumJuso.state? (daumJuso.addr2):(data.item.addr2)}
                  />
                </div>
              </div>
              <button type="submit">수정하기</button>
            </form>
            <div
              className={modalBox ? "signup-modal" : "signup-modal modalNone"}
            >
              <div className="title-box">
                <h2>주소찾기</h2>
                <img
                  src="./assets/img/close1.png"
                  alt="closeButton"
                  onClick={addrCloseButton}
                />
              </div>

              {daumJuso.blo ? (
                <div className="juso-box">
                  <div className="juso-box-div">
                    <h4>
                      <span>우편번호</span>
                      {daumJuso.zonecode}
                    </h4>
                    <h4>
                      <span>도로명</span>
                      {daumJuso.addr}
                    </h4>
                    <div>
                      <input
                        type="text"
                        placeholder="나머지 주소"
                        ref={addr2tRef}
                      />
                      <button onClick={addrButton}>확인</button>
                    </div>
                  </div>
                </div>
              ) : (
                <DaumPostcode onComplete={addrInfo} autoClose={false} />
              )}
            </div>
          </>
        )
      )}
    </ChangeInfoCss>
  );
});

export default ChangeInfo;
