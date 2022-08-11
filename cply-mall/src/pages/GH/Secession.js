import React, { memo } from "react";
import styled from "styled-components";
import RegexHelper from "../../libs/RegexHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putUserItem } from "../../slices/KH/UserSlice";
import { postSecessionItem } from "../../slices/KH/SecessionSlice";
import dayjs from "dayjs";
const SecessionCss = styled.div`
  width: 100%;
  > h1 {
    padding-bottom: 1%;
    border-bottom: 3px solid #ccc;
  }
  div {
    width: 100%;
    padding: 0.7% 0;
    &:first-child {
      display: flex;
      flex-direction: column;
      > label {
        margin: 0.5% 0;
      }
    }
  }
  button {
    width: 100%;
    padding: 1% 5%;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 1em;
    margin-top: 3%;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #000;
      transition: all 0.4s ease-in-out;
      border: 2px solid #000;
    }
  }
`;
const Secession = memo(() => {
  //페이지 이동을 위한 navigate
  const navigate = useNavigate();

  //  리덕스 초기화
  const dispatch = useDispatch();

  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useSelector((state) => state.user);

  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useSelector((state) => state.secession);

  const array = [
    "상품 구매 빈도가 낮아 이용할 필요가 없어서",
    "서비스 및 고객지원이 만족스럽지 못해서",
    "PC 또는 모바일 환경과 맞지 않아서",
    "별다른 이유없이 탈퇴",
  ];

  const [stateValue,setStateValue] = React.useState({
    value:''
  })

  const RadioValue = React.useCallback((e)=> {
    setStateValue({value:e.target.dataset.value});
  },[setStateValue])

  const secessionSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;
      console.log (stateValue.value);

      try {
        RegexHelper.check(
          current.reason,
          "회원 탈퇴 사유를 선택해 주시기 바랍니다."
        );
        RegexHelper.checked(
          current.agree,
          "회원 탈퇴 동의를 선택해 주시기 바랍니다"
        );
      } catch (e) {
        window.alert(e.message);
        return;
      }
      if (window.confirm("정말 탈퇴하시겠습니까?")) {
        dispatch(putUserItem({
          userid:'hisaishijjo11',
          editdate:dayjs().format("YYYY-MM-DD HH:mm:ss"),
          isout:'Y'
        }))
        dispatch(postSecessionItem({
          userid:'hisaishijjo11',
          reason:stateValue.value,
          regdate:dayjs().format('YYYY-MM-DD')
        }))
        window.alert("탈퇴가 완료되었습니다");
        // navigate('/');
      }
    },
    [navigate, dispatch]
  );
  return (
    <SecessionCss>
      <h1>회원탈퇴</h1>
      <form onSubmit={secessionSubmit}>
        <div>
          <h2>회원탈퇴 사유</h2>
          {array.map((v,i)=> {
            return (
              <label key={i}>
              <input type="radio" name="reason" onChange={RadioValue} data-value={v}/>
              {v}
            </label>
            )
          })}
        </div>
        <div>
          <h3>회원 탈퇴 동의</h3>
          <label htmlFor="agree">
            <input type="checkbox" name="agree" />
            회원탈퇴 안내를 모두 확인하였으며 탈퇴에 동의합니다.
          </label>
        </div>
        <div>
          <h2>회원 탈퇴 안내사항</h2>
          <p>1. 탈퇴 이후에는 보유하신 포인트 혜택이 모두 소멸합니다.</p>
          <p>
            2. 회원 정보는 탈퇴 시 관련법령에 따라 보관 의무가 있는 경우를
            제외하고는 즉시 삭제됩니다.
          </p>
          <p>
            3. 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 계약 또는
            청약철회에 관한 기록,대금 결제 및 재화 등의 공급에 관한 기록은 5년,
            그리고 소비자의 불만 또는 분쟁 처리에 관한 기록은 3년간 보존합니다.
          </p>
          <p>
            4. 탈퇴 이후에는 어떠한 방법으로도 삭제된 회원 정보를 복원할 수
            없습니다.
          </p>
        </div>
        <button type="submit">회원 탈퇴하기</button>
      </form>
    </SecessionCss>
  );
});

export default Secession;
