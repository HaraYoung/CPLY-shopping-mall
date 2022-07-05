import React, { useState, useRef } from "react";
import styled from "styled-components";
import PaginationCp from "./pagination_cp";
import Fslight from "./fslight";
const Div = styled.div`
  padding-top: 10em;
  /* padding: 0 150px; */
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: black;
    }
  }
  h2 {
    font-weight: 600;
  }
  .qaTop,
  .infoTop,
  .rv,
  .reco {
    margin-top: 8em;
    border-bottom: 1px solid black;
  }

  .sticky-list {
    background-color: white;
    display: flex;
    margin: 0;
    height: 5em;
    width: 100%;
    position: sticky;
    top: 0;
    a {
      line-height: 2.6em;
      flex-basis: 25%;
      height: 100%;
      font-size: 1.8em;
      font-weight: 600;
      color: black;
      width: 232.5px;
      text-align: center;
      border-bottom: 5px solid #f2f2f2;
    }
    .list {
      border-bottom: 5px solid black;
    }
  }
  .goodsInfo {
    height: 35em;
    padding: 10em;
    text-align: center;
    background-color: gray;
  }
  .review {
    .rv {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 15px 16px 14px;
      ul {
        line-height: 2.5em;
        display: flex;
        li:nth-child(2),
        li:nth-child(3) {
          a::before {
            content: "|";
            padding: 0 0.6em;
          }
        }
      }
    }
    .satisfaction {
      display: flex;
      justify-content: space-between;
      margin-top: 21px;
      padding: 16px;
      border: 1px solid #e1e1e1;
      border-radius: 6px;
      background-color: #fff;
      ul {
        display: flex;
        .fa-star {
          color: #fabf14;
        }
      }
    }
    .ment {
      ul {
        list-style: none;
        padding: 0;
      }
      padding: 1em;
      border: 1px solid #e1e1e1;
      flex-direction: column;
      .review-top {
        .review-star {
          padding: 0;
          display: flex;
          justify-content: space-between;
          ul {
            li {
              margin-right: 0.5em;
              &:nth-child(2) {
                font-size: 0.8em;
                line-height: 1.8em;
              }
            }
          }
        }
      }
      .review-bottom {
        .review-img {
          display: flex;
          justify-content: space-between;
          li {
            ul {
              padding: 0;
            }
            ul:nth-child(1) {
              display: flex;
              justify-content: flex-start;
              margin-bottom: 1em;
              li {
                margin-right: 1em;
                font-size: 1em;
                color: gray;
              }
            }
          }
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }
  .QA {
    .qaTop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 15px 16px 14px;

      ul {
        line-height: 2.5em;
      }
    }
    table {
      width: 100%;
    }
    .question {
      box-sizing: border-box;
      background-color: #f7f7f7;
      tbody {
        tr {
          border-top: 1px solid #e1e1e1;
          th {
            font-size: 1.2em;
            font-weight: 400;
            width: 18%;
          }
          td {
            select,
            input,
            textarea {
              padding: 0 1em;
              border: 1px solid #e1e1e1;
              border-radius: 0.4em;
              &:focus {
                border: 1px solid #e1e1e1;
              }
            }
            select,
            .input {
              height: 3em;
              width: 95%;
            }
            .input {
              height: 10em;
              padding: 1em;
            }
            select,
            label,
            input {
              cursor: pointer;
            }
            label {
              .private {
                zoom: 1.5;
                margin-right: 0.5em;
                transform: translate(0, 0.2em);
                border-style: none !important;
              }

              font-weight: 500;
              outline: 0;
            }
          }
          &:last-child {
            border-bottom: 1px solid #e1e1e1;
          }
        }

        th,
        td {
          padding: 1.2em 0 1.2em 4em;
        }
      }
    }
    .btn {
      width: 100%;
      background-color: #f7f7f7;
      button {
        padding: 1em 2em;
        margin: 0 1em;
        border-radius: 0.5em;
        font-size: 1.3em;
        &:last-child {
          background-color: black;
          color: #e1e1e1;
        }
      }
    }
    .answer {
      margin-top: 3em;
      text-align: center;
      tr,
      td {
        border-bottom: 1px solid #e1e1e1;
      }
      th,
      td {
        padding: 1.2em 3em;
      }
      th {
        font-size: 1.2em;
      }
      td {
        .waiting {
          border: 1px solid red;
          border-radius: 1em;
          padding: 0.1em 1em;
          color: red;
        }
        .done {
          border: 1px solid blue;
          border-radius: 1em;
          padding: 0.1em 1em;
          color: blue;
        }
      }
    }
  }
  .information {
    div:nth-child(2) {
      a {
        position: relative;
        width: 100%;
        padding: 2em 3em 2em 2em;
        display: block;
        font-size: 1.2em;
        border-bottom: 1px solid #e1e1e1;
        i {
          position: absolute;
          right: 0;
        }
      }
      div {
        padding: 2em 2.8em;
        color: #777777;
        background-color: #f7f7f7;
        line-height: 1em;
        text-align: start;
        h5 {
          margin-bottom: 1em;
        }
        p {
          text-indent: 1em;
          overflow: hidden;
          word-wrap: break-word;
        }
        .indent {
          text-indent: 2em;
        }
      }
    }
  }
  .recommendation {
    .recoList {
      margin-top: 2em;
      margin-bottom: 8em;
      display: flex;
      div {
        width: 20%;
        margin: 0 0.5em 1em 0.5em;
        a {
          div {
            padding: 0;
            margin: 0;
            width: 14em;
            height: 14em;
            background-color: greenyellow;
          }
          h5 {
            padding: 0.5em 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          ul {
            display: flex;
            padding: 0;
            li:nth-child(1) {
              color: #ff204b;
              font-size: 1.4em;
              margin-right: 0.2em;
            }
            li:nth-child(2) {
              font-size: 1.4em;
              margin-right: 0.2em;
            }
            li:nth-child(3) {
              line-height: 2em;
              text-decoration: line-through;
              color: #757575;
            }
          }
        }
      }
    }
  }
`;
const DetailBottom = () => {
  const [list, setList] = useState(0);
  const [open, setOpen] = useState(0);
  const [ifm1, setIfm1] = useState(0);
  const [ifm2, setIfm2] = useState(0);
  const [ifm3, setIfm3] = useState(0);

  const onList = React.useCallback((e) => {
    // e.preventDefault();
    const value = e.target.dataset.value;
    if (value === "0") {
      setList(0);
    } else if (value === "1") {
      setList(1);
    } else if (value === "2") {
      setList(2);
    } else {
      setList(3);
    }
  }, []);

  const hidden = React.useCallback(
    (e) => {
      e.preventDefault();
      open === 0 ? setOpen(1) : setOpen(0);
    },
    [open]
  );

  const info = React.useCallback(
    (e) => {
      e.preventDefault();
      const data = e.target.dataset.info;

      if (data === "1") {
        ifm1 === 0 ? setIfm1(1) : setIfm1(0);
      } else if (data === "2") {
        ifm2 === 0 ? setIfm2(1) : setIfm2(0);
      } else {
        ifm3 === 0 ? setIfm3(1) : setIfm3(0);
      }
    },
    [ifm1, ifm2, ifm3]
  );

  return (
    <Div>
      <div className="sticky-list">
        <a
          href="#info"
          onClick={onList}
          data-value="0"
          className={list === 0 ? "list" : ""}
        >
          상품정보
        </a>
        <a
          href="#review"
          onClick={onList}
          data-value="1"
          className={list === 1 ? "list" : ""}
        >
          리뷰
        </a>
        <a
          href="#QA"
          onClick={onList}
          data-value="2"
          className={list === 2 ? "list" : ""}
        >
          Q&A
        </a>
        <a
          href="#information"
          onClick={onList}
          data-value="3"
          className={list === 3 ? "list" : ""}
        >
          주문정보
        </a>
      </div>
      <div className="goodsInfo" id="info">
        <img />
        상품정보
      </div>
      <div className="review" id="review">
        <ul className="rv">
          <li>
            <h2>리뷰</h2>
            <span></span>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">전체</a>
              </li>
              <li>
                <a href="#">포토리뷰</a>
              </li>
              <li>
                <a href="#">텍스트리뷰</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="satisfaction">
          <li>만족도</li>
          <li>
            <ul>
              <li>
                <i className="fa fa-star"></i>&nbsp;
                <i className="fa fa-star"></i>&nbsp;
                <i className="fa fa-star"></i>&nbsp;
                <i className="fa fa-star"></i>&nbsp;
                <i className="fa fa-star"></i>&nbsp;
              </li>
              <li style={{ marginLeft: "0.8em" }}> 5 / 5 </li>
            </ul>
          </li>
        </ul>
        {/* ajax 반복처리 */}
        <div className="ment">
          <div className="review-top">
            <ul className="review-star">
              <li>
                <ul>
                  <li>
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                  </li>
                  <li>suji*****</li>
                </ul>
              </li>
              <li>2022-06-30</li>
            </ul>
          </div>
          <div className="review-bottom">
            <ul className="review-img">
              <li>
                <ul>
                  <li>165cm</li>
                  <li>상의55</li>
                  <li>하의66</li>
                  <li>245mm</li>
                  {/* 착용감 = 매우 커요/조금 커요/적당해요/조금 작아요/ 매우 작아요  */}
                  <li>선택1/선택2/착용감</li>
                </ul>
                <ul>
                  <li>
                    <p>이곳은 구매자가 남긴 리뷰가 보여지는 곳입니다.</p>
                  </li>
                </ul>
              </li>
              <li>
                <Fslight />
              </li>
            </ul>
          </div>
        </div>
        <div className="ment">
          <div className="review-top">
            <ul className="review-star">
              <li>
                <ul>
                  <li>
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                  </li>
                  <li>suji*****</li>
                </ul>
              </li>
              <li>2022-06-30</li>
            </ul>
          </div>
          <div className="review-bottom">
            <ul className="review-img">
              <li>
                <ul>
                  <li>165cm</li>
                  <li>상의55</li>
                  <li>하의66</li>
                  <li>245mm</li>
                  {/* 착용감 = 매우 커요/조금 커요/적당해요/조금 작아요/ 매우 작아요  */}
                  <li>선택1/선택2/착용감</li>
                </ul>
                <ul>
                  <li>
                    <p>이곳은 구매자가 남긴 리뷰가 보여지는 곳입니다.</p>
                  </li>
                </ul>
              </li>
              <li>
                <Fslight />
              </li>
            </ul>
          </div>
        </div>
        <div className="ment">
          <div className="review-top">
            <ul className="review-star">
              <li>
                <ul>
                  <li>
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                    <i className="fa fa-star"></i>&nbsp;
                  </li>
                  <li>suji*****</li>
                </ul>
              </li>
              <li>2022-06-30</li>
            </ul>
          </div>
          <div className="review-bottom">
            <ul className="review-img">
              <li>
                <ul>
                  <li>165cm</li>
                  <li>상의55</li>
                  <li>하의66</li>
                  <li>245mm</li>
                  {/* 착용감 = 매우 커요/조금 커요/적당해요/조금 작아요/ 매우 작아요  */}
                  <li>선택1/선택2/착용감</li>
                </ul>
                <ul>
                  <li>
                    <p>이곳은 구매자가 남긴 리뷰가 보여지는 곳입니다.</p>
                  </li>
                </ul>
              </li>
              <li>
                <Fslight />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PaginationCp />
      <div className="QA" id="QA">
        <ul className="qaTop">
          <li>
            <h2>Q&A</h2>
            <span></span>
          </li>
          <li>
            <ul>
              <li>
                <a href="#!" onClick={hidden}>
                  문의하기
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <table
            className="question"
            style={{ display: open === 0 ? "none" : "" }}
          >
            <tbody>
              <tr>
                <th>질문유형</th>
                <td>
                  <select>
                    <option value="selected"> 질문유형을 선택하세요.</option>
                    <option> 상품 문의</option>
                    <option> 교환/반품</option>
                    <option> 불량/오배송</option>
                    <option> 기타</option>
                    <option> 배송 문의</option>
                    <option> 취소/변경</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <textarea
                    rows="3"
                    col="5"
                    placeholder="내용을 입력해 주세요."
                    className="input"
                  />
                </td>
              </tr>
              <tr>
                <th>공개여부</th>
                <td>
                  <label htmlFor="private">
                    <input type="checkbox" id="private" className="private" />
                    비공개
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn" style={{ display: open === 0 ? "none" : "" }}>
            <button type="button" onClick={hidden}>
              취소하기
            </button>
            <button type="button">등록하기</button>
          </div>
          <table className="answer" align="center">
            <thead>
              <tr>
                <th>분류</th>
                <th>처리상태</th>
                <th>내용</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {/* ajax 처리 */}
              <tr>
                <td>교환/반품</td>
                <td>
                  <span className="waiting">답변대기</span>
                </td>
                <td>
                  <a href="#!">
                    <i className="fa fa-lock"></i>&nbsp;&nbsp;비밀글입니다.
                  </a>
                </td>
                <td>suji***</td>
                <td>YYYY.MM.DD</td>
              </tr>
              <tr>
                <td>교환/반품</td>
                <td>
                  <span className="waiting">답변대기</span>
                </td>
                <td>
                  <a href="#!">
                    <i className="fa fa-lock"></i>&nbsp;&nbsp;비밀글입니다.
                  </a>
                </td>
                <td>suji***</td>
                <td>YYYY.MM.DD</td>
              </tr>
              <tr>
                <td>교환/반품</td>
                <td>
                  <span className="done">답변완료</span>
                </td>
                <td>
                  <a href="#!">
                    <i className="fa fa-lock"></i>&nbsp;&nbsp;비밀글입니다.
                  </a>
                </td>
                <td>suji***</td>
                <td>YYYY.MM.DD</td>
              </tr>
              <tr>
                <td>교환/반품</td>
                <td>
                  <span className="done">답변완료</span>
                </td>
                <td>
                  <a href="#!">
                    <i className="fa fa-lock"></i>&nbsp;&nbsp;비밀글입니다.
                  </a>
                </td>
                <td>suji***</td>
                <td>YYYY.MM.DD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PaginationCp />
      </div>
      <div className="information" id="information">
        <div className="infoTop">
          <h2 style={{ padding: "15px 16px 14px" }}>주문정보</h2>
        </div>
        <div>
          <a data-info="1" href="#!" onClick={info}>
            판매자 정보<i className="fa fa-angle-down"></i>
          </a>
          <div style={{ display: ifm1 === 0 ? "none" : "block" }}>
            <h5>[스토어 정보]</h5>
            <p>상호명 : cply</p>
            <p>대표자 : 윤원식,이교헌,박세영,최수진</p>
            <p>사업자등록번호 : 123-01-01234</p>
            <p> 통신판매업번호 : 제2022-서울-0100호</p>
            <p>
              사업장소재지 : 01234 ) 서울 서초구 서초대로77길 54 서초w타워
              13,14층
            </p>
            <br />
            <h5>[ 모델 사이즈 정보 ]</h5>
            <p>키 : 166cm</p>
            <p>상의 사이즈 : 44</p>
            <p>하의 사이즈 : 26</p>
            <p>발 사이즈 : 240mm</p>
          </div>
          <a href="#!" data-info="2" onClick={info}>
            상품 정보<i className="fa fa-angle-down"></i>
          </a>
          <div style={{ display: ifm2 === 0 ? "none" : "" }}>
            <p>상품 상세 참조</p>
          </div>
          <a href="#!" data-info="3" onClick={info}>
            배송/교환/환불/취소<i className="fa fa-angle-down"></i>
          </a>
          <div style={{ display: ifm3 === 0 ? "none" : "" }}>
            <h5>[배송정보]</h5>
            <p>발 사이즈 : 240mm</p>
            <h5>[ 교환/환불 정보 ]</h5>
            <p>반품 및 교환은 상품 수령 후 7일 이내에 신청하실 수 있습니다.</p>
            <p>
              재화 등의 내용이 표시, 광고의 내용과 다르거나 계약내용과 다르게
              이행된 경우에는 전자상거래법 제17조3항에 따라 청약철회를 할 수
              있습니다.
            </p>
            <p>
              교환/환불이 발생하는 경우 그 원인을 제공한 자가 배송비를
              부담합니다.
            </p>
            <p>
              - 고객변심 : 최초 배송비 + 반품 배송비 + (교환의 경우) 교환
              배송비는 고객이 부담
            </p>
            <p>
              - 판매자귀책 : 최초 배송비 + 반품 배송비 + (교환의 경우) 교환
              배송비는 판매자가 부담
            </p>
            <p>다음의 경우는 교환 및 환불이 불가능합니다.</p>
            <p>- 반품/교환 가능 기간을 초과한 경우</p>
            <p>
              - 상품 및 구성품을 분실하였거나 취급부주의로 인한 오염/파손/고장된
              경우
            </p>
            <p>- 상품을 착용하였거나 세탁, 수선한 경우</p>
            <p>- 소비자 과실로 인한 옷의 변색(예 : 착생, 화장품 오염 등)</p>
            <p>
              - 착용으로 인한 니트류 상품의 늘어남 발생 및 가죽 제품의 주름 발생
            </p>
            <p>- 상품의 가치가 현저히 감소하여 재판매가 불가할 경우</p>
            <p>- 구매확정된 주문의 경우</p>
            <p>교환/환불</p>
            <p>단순 변심에 의한 교환의 경우 추가 배송비가 발생합니다.</p>
            <p>교환/반품 불가</p>
            <p>
              고객님의 입장에서 최대한 교환 및 반품을 도와드리고 있지만, 다음의
              경우에는 교환 및 반품이 어려움을 양해 부탁 드립니다.
            </p>
            <p>1. 고객님께서 상품을 수령하신 후 7일이 초과한 경우</p>
            <p>2. 상품의 재판매가 불가한 경우</p>
            <p>3. 셋트 상품 중 구성품 일부만 반품하는 것은 불가능 합니다.</p>
            <p>
              4. 나염 상품은 상품 특성 상, 패턴의 위치가 조금씩 다를 수 있으며,
              이는 상품의 하자 또는 불량에 해당되지 않습니다.
            </p>
            <p>
              5. 상품의 마감 처리가 미흡한 경우 (예: 실밥, 본드자국, 초크자국,
              박음질 불균형, 지퍼의 퍽퍽함, 단추 구멍이 완벽히 뚫리지 않은 경우
              등)은 상품의 하자 또는
            </p>
            <p className="indent"> 불량에 해당되지 않습니다.</p>
            <p>
              6. 컴퓨터 모니터 및 스마트폰 화면 등의 차이로 인해 실물과 색상
              차이가 있을 수 있으며, 상품 사이즈는 측정하는 방법에 따라 다를 수
              있기 때문에 사이즈 오차는 상품의
            </p>
            <p className="indent">하자 또는 불량에 해당되지 않습니다.</p>
            <p>
              7. 상품과 관계없는 케이스, 포장지 등의 파손은 상품의 하자 또는
              불량에 해당되지 않습니다.
            </p>
            <p>
              8. 충전재가 포함된 패딩류 또는 앙고라, 무스탕 소재가 포함된 상품
              등의 일부 털 빠짐은 자연스러운 현상이기 때문에 상품의 하자 또는
              불량에 해당되지 않습니다.
            </p>
            <h5>[ 미성년자 주문취소 안내 ]</h5>
            <p>
              미성년자가 법정대리인의 동의 없이 구매계약을 체결한 경우
              미성년자와 법정대리인은 구매계약을 취소할 수 있습니다
            </p>
          </div>
        </div>
      </div>
      <div className="recommendation">
        <div className="reco">
          <h2 style={{ padding: "15px 16px 14px" }}>추천상품</h2>
        </div>
        <div className="recoList">
          <div>
            <a href="#!">
              <div></div>
              <h5>title</h5>
              <ul>
                <li>
                  <strong>0%</strong>
                </li>
                <li>
                  <strong>0원</strong>
                </li>
                <li>할인 전 가격</li>
              </ul>
            </a>
          </div>
          <div>
            <a href="#!">
              <div></div>
              <h5>title</h5>
              <ul>
                <li>
                  <strong>0%</strong>
                </li>
                <li>
                  <strong>0원</strong>
                </li>
                <li>할인 전 가격</li>
              </ul>
            </a>
          </div>
          <div>
            <a href="#!">
              <div></div>
              <h5>title</h5>
              <ul>
                <li>
                  <strong>0%</strong>
                </li>
                <li>
                  <strong>0원</strong>
                </li>
                <li>할인 전 가격</li>
              </ul>
            </a>
          </div>
          <div>
            <a href="#!">
              <div></div>
              <h5>title</h5>
              <ul>
                <li>
                  <strong>0%</strong>
                </li>
                <li>
                  <strong>0원</strong>
                </li>
                <li>할인 전 가격</li>
              </ul>
            </a>
          </div>
          <div>
            <a href="#!">
              <div></div>
              <h5>title</h5>
              <ul>
                <li>
                  <strong>0%</strong>
                </li>
                <li>
                  <strong>0원</strong>
                </li>
                <li>할인 전 가격</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default DetailBottom;
