import React, { memo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import ErrorView from '../../components/ErrorView';
import {getQaList} from '../../slices/KH/QaSlice';
import { getSession } from '../../slices/KH/SessionSlice';
import styled from 'styled-components';
import Table from '../../components/Table';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

const QaCss = styled.div`
    >h1 {
        margin-top: 0;
        margin-bottom: 40px;
    }
`;

//페이지 번호
const Pagenation = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;

  a {
    color: black;
    padding: 8px 12px;
    text-decoration: none;
    transition: background-color 0.3s;
    margin: 0 5px;

    &.current-page {
      background-color: #116688;
      color: white;
      border-radius: 5px;
    }
    &.disabled {
      color: #ccc;
      cursor: pointer;
    }
    &:hover:not(.current-page) {
      background-color: #ddd;
      border-radius: 5px;
    }
  }
`;

const Qa = memo(() => {
    //리덕스 초기화
    const dispatch = useDispatch();

    const {data:data1,loading:loading1,error:error1} = useSelector((state)=>state.session)
    const {data:data2,loading:loading2,error:error2} = useSelector((state)=>state.qa)


    //상태값
    const [qaLogin,setQaLogin] = React.useState({
        blo1:false,
        blo2:false,
    })
    React.useEffect(()=> {
        dispatch(getSession())
        setQaLogin({
            ...qaLogin,
            blo1:true
        })
    },[dispatch])

    React.useEffect(()=> {
        if (qaLogin.blo1) {
            if (data1.item !== null && data1.item !== undefined) {
                dispatch(getQaList({
                    userid:data1.item.userid
                }))
            }else {
                return;
            }
        }
    },[data1])
    return (
        <div>
            <Spinner visible={loading2}/>
            {error2 ? (
                <ErrorView error={error2}/>
            ):(
                data2 && (
                    <>
                    <QaCss>
                        <h1>내 문의 내역</h1>
                        <Table>
                        <thead>
                            <tr>
                                <th>제목</th>
                                <th>답변 상태</th>
                                <th>등록일자</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data2.item.map((v,i)=> {
                            return (
                                <tr>
                                    <td>{v.title}</td>
                                    <td>{v.success}</td>
                                    <td>{dayjs(v.regdate).format("YYYY-MM-DD")}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </Table>
                    </QaCss>
                {/* {data2 && (
              <Pagenation>
                {data2.pagenation.prevGroupLastPage > 0 ? (
                  <li>
                    <NavLink
                      to={`/?query=${query}&rows=${rows}&page=${data2.pagenation.prevGroupLastPage}`}
                    >
                      &laquo;
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="#" className="disabled">
                      &laquo;
                    </NavLink>
                  </li>
                )}

                {(() => {
                  const li = [];
                  const start = data2.pagenation.groupStart;
                  const end = data2.pagenation.groupEnd + 1;
                  for (let i = start; i < end; i++) {
                    if (i === data2.pagenation.nowPage) {
                      li.push(
                        <li key={i}>
                          <NavLink to="#" className="current-page">
                            {i}
                          </NavLink>
                        </li>
                      );
                    } else {
                      li.push(
                        <li key={i}>
                          <NavLink
                            to={`/?query=${query}&rows=${rows}&page=${i}`}
                          >
                            {i}
                          </NavLink>
                        </li>
                      );
                    }
                  }
                  return li;
                })()}

                {data2.pagenation.nextGroupFirstPage > 0 ? (
                  <li>
                    <NavLink
                      to={`/?query=${query}&rows=${rows}&page=${data2.pagenation.nextGroupFirstPage}`}
                    >
                      &raquo;
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to={`/?query=${query}&rows=${rows}&page=${data2.pagenation.groupEnd}`} className="disabled">
                      &raquo;
                    </NavLink>
                  </li>
                )}
              </Pagenation>
            )} */}
            </>
                )
            )}
        </div>
    );
});

export default Qa;