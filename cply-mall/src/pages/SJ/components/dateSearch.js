// 내가 쓴 리뷰 페이지에서 최상단에 위치하는 날짜 검색 컴포넌트입니다.
import React from "react";
import styled from "styled-components";

const DateSection = styled.div`
  margin-top: 4em;
  .dateLine {
    position: relative;
    padding: 1em 0;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    div {
      margin-right: 0.8em;
      button {
        margin-right: 0.8em;
        border: none;
        border-radius: 0.5em;
        padding: 0.2em 0.8em;
      }
    }
    .datePick {
      position: sticky;
      display: flex;
      top: 0;
      background-color: #fff;
      width: 40%;
      margin: 0;
      input,
      button {
        display: block;
        margin-right: 5px;
        font-size: 16px;
        padding: 0 10px;
        cursor: pointer;
      }

      input {
        height: 30px;
        flex: 1;
        border-radius: 5px;
        border: 1px solid lightgray;
      }

      button {
        padding: 0.2em 0.8em;
        border-radius: 5px;
        border: none;
        background-color: gray;
        color: #fff;
        flex: none;
      }
    }
    select {
      position: absolute;
      right: 1em;
      border: 1px solid lightgray;
      border-radius: 0.5em;
      padding: 0.2em 0.8em;
      cursor: pointer;
      &:focus {
        border: 1px solid #e1e1e1;
      }
    }
  }
`;
const DateSearch = () => {
  return (
    <DateSection>
      <h4>
        <b> 내가 작성한 리뷰 </b>
      </h4>
      <div className="dateLine">
        <div>
          <button type="button"> 오늘 </button>
          <button type="button"> 6개월 </button>
          <button type="button"> 1년 </button>
        </div>
        <form className="datePick">
          <input
            type="date"
            name="minDate"
            // value={minDt}
            // onChange={onMinDateChange}
            /*  해당 사이의 기간만 가능하게끔 설정하기 */
            min="2020-02-17"
            max="2022-05-31"
          />
          <b>&nbsp;~ &nbsp; </b>
          <input
            type="date"
            name="maxDate"
            // value={maxDt}
            // onChange={onMaxDateChange}
            min="2020-02-17"
            max="2022-05-31"
          />
          <button type="submit">조회</button>
        </form>
        <select>
          <option value="selected">전체</option>
          <option>한달사용 리뷰</option>
          <option>판매자 답글 등록</option>
        </select>
      </div>
    </DateSection>
  );
};

export default DateSearch;
