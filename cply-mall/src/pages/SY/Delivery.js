/**
 * @filename: Delivery.js
 * @description: 배송 조회 버튼 클릭시 나타나는 컴포넌트
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */

import React, { memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeliveryTop = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  .top1{
    display: flex;
    justify-content: space-around;
    width: 40%;
  }
  .top2{
    display: flex;
    justify-content: space-around;
    width:60%;
    span:first-child{
      display: inline-block;
      margin-left: 7em;
    }
    .close{
      margin-left: 10em;
      padding-bottom: 0.5em;
      cursor: pointer;
    }
  }

`;

const DeliveryBottom = styled.div`
  display: flex;
  padding: 1em 0;
  .bottom1{
    display: flex;
    justify-content: space-around;
    width: 40%;
    span{
      margin-left:1em;
    }
  }
  .bottom2{
    display: flex;
    justify-content: space-around;
    width:60%;
    margin-right: 2em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid gainsboro;
  }
`;

const Delivery = memo(() => {
  const [DClose,setDClose]= React.useState(true)
  const onClickClose= ()=>{
    setDClose(!DClose);
//slice or props를 통해 클릭시 Order 페이지에서 import된 Delivery컴포넌트를 핸들링
  }
  return (
    <div>
      <DeliveryTop>
        <div className="top1">
          <span>배송 상태</span>
          <span>송장 번호</span>
        </div>
        <div className="top2">
          <span>현재 위치</span>
          <span className='close'>
            <FontAwesomeIcon icon={faXmark} size="2x" className="deleteItem" onClick={onClickClose} />
          </span>
        </div>
      </DeliveryTop>
      <DeliveryBottom>
        <div className="bottom1">
        <span>배송 중</span>
        <span>000000000</span>
        </div>
        <div className="bottom2">
        <span>시간</span>
        <span>상품 위치</span>
        </div>
      </DeliveryBottom>
    </div>
  );
});

export default Delivery;
