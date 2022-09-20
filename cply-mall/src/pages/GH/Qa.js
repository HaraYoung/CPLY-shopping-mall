import React, { memo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import ErrorView from '../../components/ErrorView';
import {getQaList} from '../../slices/KH/QaSlice';
import { getSession } from '../../slices/KH/SessionSlice';
import styled from 'styled-components';
import Table from '../../components/Table';
import dayjs from 'dayjs';
import { useNavigate,Link,NavLink } from 'react-router-dom';
import {useQueryString} from '../../hooks/useQueryString';

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
  position: relative;

  a {
    color: black;
    padding: 8px 12px;
    text-decoration: none;
    transition: background-color 0.3s;
    margin: 0 5px;

    &.current-page {
      background-color: #000;
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
  >div {
      display: block;
      >span {
        a {
          color: #fff;
          background-color: #000;
          padding: 5px 7px;
          margin: 5px 0;
          border-radius: 5px;
          position: absolute;
          right: 0;
          top: -50%;
          border: 1px solid #000;
          &:hover {
            background-color: #fff;
            transition: all 0.3s;
            cursor: pointer;
            color: #000;
            border: 1px solid #000;
          }
        }
      }
    }
`;

const Qa = memo(() => {
    const navigate = useNavigate();

    //리덕스 초기화
    const dispatch = useDispatch();

    const {data:data1,loading:loading1,error:error1} = useSelector((state)=>state.session)
    const {data:data2,loading:loading2,error:error2} = useSelector((state)=>state.qa)

  //querystring 문자열 얻기
  //ex) http://localhost:3000?query=풀스택&rows=10&page=3
  const { page } = useQueryString({
    page: 1,
  });

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
        console.log ('aa')
    },[dispatch])

    React.useEffect(()=> {
        if (qaLogin.blo1) {
            if (data1.item !== null && data1.item !== undefined) {
                dispatch(getQaList({
                    userid:data1.item.userid,
                    page:page
                }))
                console.log ('bb')
            }else {
                return;
            }
        }
        
    },[data1,page])

    const onQaInfoButton = React.useCallback((e)=> {
      e.preventDefault();

      const current = e.target;

      const parent = current.closest('.foo');

      const id = parent.dataset.id;

      navigate(`/servicecenter/qainfo/${id}`)
    },[])
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
                                <tr key={i} data-id={v.id} className="foo" onClick={onQaInfoButton}>
                                    <td>{v.title}</td>
                                    <td>{v.success}</td>
                                    <td>{dayjs(v.regdate).format("YYYY-MM-DD")}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </Table>
                    </QaCss>
                {data2 && (
              <Pagenation>
                {data2.pagenation.prevGroupLastPage > 0 ? (
                  <li>
                    <NavLink
                      to={`/servicecenter/qa/?page=${data2.pagenation.prevGroupLastPage}`}
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
                            to={`/servicecenter/qa/?page=${i}`}
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
                      to={`/servicecenter/qa/?page=${data2.pagenation.nextGroupFirstPage}`}
                    >
                      &raquo;
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to={`/servicecenter/qa/?page=${data2.pagenation.groupEnd}`} className="disabled">
                      &raquo;
                    </NavLink>
                  </li>
                )}
                  <div>
                    <span><Link to='/servicecenter/qaadd'>글쓰기</Link></span>
                  </div>
              </Pagenation>
            )}
            </>
                )
            )}
        </div>
    );
});

export default Qa;