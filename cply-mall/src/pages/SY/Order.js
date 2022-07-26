/**
 * @filename: Order.js
 * @description: 주문/배송 페이지
 * @author: 박세영(qkrtpdud9899@gmail.com)
 */
import React, { memo } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";

//Slice에 정의된 액션함수들 참조
import { orderName } from "../../slices/SY/OrderStateSlice"; //상태값을 갱신하는 함수들

import Delivery from "./Delivery";
import ReviewWrite from "./ReviewWrite";

import Img from "./img/찡찡이젤리.jpg";

const OrderArea = styled.div`
  position: relative;
  padding: 1em 2em;
  .orderArea {
    .orderItem {
      padding: 1em 0;
      .orderHeader {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h3 {
          padding-left: 0.5em;
        }
        span {
          cursor: pointer;
          padding-bottom: 0.5em;
          a {
            text-decoration: none;
            color: #000;
            padding-right: 0.5em;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .orderItemTitle {
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        padding: 0.5em 0;
        .title1 {
          width: 30%;
          display: flex;
          justify-content: space-between;
        }
        .title2 {
          width: 25%;
          display: flex;
          justify-content: space-between;
        }
      }
      .orderItemContent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5em 0;
        border-bottom: 1px solid gainsboro;

        .info1 {
          display: flex;
          justify-content: space-around;
          width: 70%;
          align-items: center;
          .orderNum {
            width: 40%;
            text-align: center;
          }
          .orderItemInfo {
            width: 50%;
            display: flex;
            align-items: center;
            /* border-left: 1px solid gainsboro;
            border-right: 1px solid gainsboro; */
            padding: 0 2em;
            .itemInfo {
              padding-left: 1.5em;
              color: gray;
              p:first-child {
                color: #000;
                margin-bottom: 0;
              }
              p:last-child {
                margin-top: -0.8em;
              }
            }
          }
        }
        .info2 {
          display: flex;
          justify-content: space-around;
          width: 45%;
          margin-left: 2em;
          align-items: center;

          span:first-child {
            padding-top: 0.5em;
            width: 20%;
            text-align: center;
          }
          .orderSituation {
            width: 70%;
            text-align: center;
            margin-left: 0.5em;
            div {
              padding-bottom: 1em;
              font-size: 17px;
            }
            a,
            button {
              display: inline-block;
              padding: 0.5em;
              text-decoration: none;
              background-color: #000;
              color: #fff;
              border-radius: 5px;
              font-size: 13px;
              cursor: pointer;
              border: none;
              &:hover {
                background-color: gainsboro;
                color: #000;
              }
            }
            div a {
              /* 배송완료 */
              margin-top: 0.5em;
              background-color: gainsboro;
              color: #000;
              &:hover {
                background-color: gray;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;

const Order = memo(() => {
  //dispatch함수 생성
  const dispatch = useDispatch();
  //hook를 통해 slice가 관리하는 상태값 가져오기
  const { stateName } = useSelector((state) => state.orderState);
  //delivery컴포넌트 상태값
  const [delivery, setDelivery] = React.useState(false);
  const onClickDelivery = () => {
    setDelivery(!delivery);
  };

  //reviewWrite 컴포넌트 상태값
  const [review, setReview] = React.useState(false);
  const onClickReview = () => {
    setReview(true);
  };

  const onClickCancel = () => {
    if (window.confirm("주문을 취소하시겠습니까?")) {
      //RandE이동인데 링크태그 그대로 이동하는것..?
      window.location.href = "http://localhost:3000/mypage/RandE";
    }
  };

  //배송 완료 상태값
  //const [deliveryComplete, setdeliveryComplete]= React.useState(false);

  //구매 확정 ui 상태값-> 배송완료 상태의 구매확정 버튼 클릭시 나타남
  const [decide, setDecide] = React.useState(false);
  const onClickDecide = () => {
    if (
      window.confirm(
        "구매 확정시 교환/반품은 불가합니다. 구매를 확정하시겠습니까?"
      )
    ) {
      alert("구매가 확정되었습니다.");
      setDecide(true);
    }
  };
  //setdeliveryComplete(!deliveryComplete);

  //리뷰 등록이 되었다는 알림창의 확인버튼을 눌렀을때 reviewBtn을 false로 바꿀것
  const [reviewBtn, setReviewBtn] = React.useState(true);

  return (
    <OrderArea>
      <h1>주문/배송조회</h1>
      {/*주문 완료 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
            <h3>2020.06.06</h3>
            <span>
              <NavLink to="/mypage/orderDetail">주문 상세보기</NavLink>
              <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
            </span>
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>주문 번호</span>
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <div className="orderNum">0000-000-00</div>
              <span className="orderItemInfo">
                <div>
                  <img src={Img} alt="상품 이미지" width="100px" />
                </div>
                <div className="itemInfo">
                  <p>상품 이름</p>
                  <p>옵션</p>
                  <p>0개(수량)</p>
                </div>
              </span>
            </div>
            <div className="info2">
              <span>000원</span>
              <span className="orderSituation">
                <div defaultValue={dispatch(orderName(1))}>
                  {stateName}
                  {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                </div>
                {/*클릭시 교환/반품 페이지로 이동 */}

                <Link to="/mypage/RandE" onClick={onClickCancel}>
                  주문 취소
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*배송중 */}
      <div className="orderArea">
        {/*하나의 상품 영역 */}
        <div className="orderItem">
          <div className="orderHeader">
            {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
            <h3>2020.06.06</h3>
            <span>
              <NavLink to="/mypage/orderDetail">주문 상세보기</NavLink>
              <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
            </span>
          </div>
          <div className="orderItemTitle">
            <div className="title1">
              <span>주문 번호</span>
              <span>상품 정보</span>
            </div>
            <div className="title2">
              <span>주문 금액</span>
              <span>진행 상황</span>
            </div>
          </div>
          <div className="orderItemContent">
            <div className="info1">
              <div className="orderNum">0000-000-00</div>
              <span className="orderItemInfo">
                <div>
                  <img src={Img} alt="상품 이미지" width="100px" />
                </div>
                <div className="itemInfo">
                  <p>상품 이름</p>
                  <p>옵션</p>
                  <p>0개(수량)</p>
                </div>
              </span>
            </div>
            <div className="info2">
              <span>000원</span>
              <span className="orderSituation">
                <div>
                  배송중
                  {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                </div>

                <button type="button" onClick={onClickDelivery}>
                  배송 조회
                </button>
                {/*클릭시 delivery컴포넌트 나타남 - 닫기 구현해야함*/}
              </span>
            </div>
          </div>
        </div>
      </div>
      {delivery && <Delivery />}
      {/*배송 완료 */}
      {!decide && (
        <div className="orderArea">
          {/*하나의 상품 영역 */}
          <div className="orderItem">
            <div className="orderHeader">
              {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
              <h3>2020.06.06</h3>
              <span>
                <NavLink to="/mypage/orderDetail">주문 상세보기</NavLink>
                <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
              </span>
            </div>
            <div className="orderItemTitle">
              <div className="title1">
                <span>주문 번호</span>
                <span>상품 정보</span>
              </div>
              <div className="title2">
                <span>주문 금액</span>
                <span>진행 상황</span>
              </div>
            </div>
            <div className="orderItemContent">
              <div className="info1">
                <div className="orderNum">0000-000-00</div>
                <span className="orderItemInfo">
                  <div>
                    <img src={Img} alt="상품 이미지" width="100px" />
                  </div>
                  <div className="itemInfo">
                    <p>상품 이름</p>
                    <p>옵션</p>
                    <p>0개(수량)</p>
                  </div>
                </span>
              </div>
              <div className="info2">
                <span>000원</span>
                <span className="orderSituation">
                  <div>
                    배송완료
                    {/*[주문확인중,배송중,배송완료,구매확정]인 경우를 따져 선택값 or 컴포넌트 */}
                  </div>
                  {/*클릭시 구매 확적을 묻는 알림창 뜸->확인 클릭시 구매 확정 버튼 없어짐 */}
                  <NavLink to="#" onClick={onClickDecide}>
                    구매 확정
                  </NavLink>
                  {/*클릭시 교환/반품 페이지로 이동 */}
                  <div>
                    <NavLink to="/mypage/RandE">교환/반품</NavLink>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*구매 확정 */}
      {decide && (
        <div className="orderArea">
          {/*하나의 상품 영역 */}
          <div className="orderItem">
            <div className="orderHeader">
              {/*주문 날짜와 상세 주문 정보 버튼 영역 */}
              <h3>2020.06.06</h3>
              <span>
                <NavLink to="/mypage/orderDetail">주문 상세보기</NavLink>
                <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
              </span>
            </div>
            <div className="orderItemTitle">
              <div className="title1">
                <span>주문 번호</span>
                <span>상품 정보</span>
              </div>
              <div className="title2">
                <span>주문 금액</span>
                <span>진행 상황</span>
              </div>
            </div>
            <div className="orderItemContent">
              <div className="info1">
                <div className="orderNum">0000-000-00</div>
                <span className="orderItemInfo">
                  <div>
                    <img src={Img} alt="상품 이미지" width="100px" />
                  </div>
                  <div className="itemInfo">
                    <p>상품 이름</p>
                    <p>옵션</p>
                    <p>0개(수량)</p>
                  </div>
                </span>
              </div>
              <div className="info2">
                <span>000원</span>
                <span className="orderSituation">
                  <div>구매 확정</div>
                  {reviewBtn && (
                    <button type="button" onClick={onClickReview}>
                      리뷰 쓰기
                    </button>
                  )}
                  {/*클릭시 리뷰쓰기 컴포넌트 나타남 */}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {review && <ReviewWrite />}
    </OrderArea>
  );
});

export default Order;
