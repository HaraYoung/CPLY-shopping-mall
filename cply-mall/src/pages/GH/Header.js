import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from 'react-router-dom';

const HeaderCss = styled.div`
    .header-box {
        width: 100%;
        background-color: #000;
        text-align: right;
        padding: 10px 0;
        a {
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            margin-left:15px;
            text-decoration: none;
            padding: 3px;
            &:hover {
                color: #000;
                background-color: #fff;
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
            }
            &:nth-child(3) {
                margin-right: 140px;
            }
        }
    }
    .header-box2 {
        width: 100%;
        background-color: #ccc;
        text-align: center;
        position: relative;
        padding: 20px 0;
        a {
            text-decoration: none;
            color: #000;
            h1 {
                margin: 0;
                font-size: 40px;
                &:hover {
                    color: #fff;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
        >button {
            position: absolute;
            left: 0;
            top: 50%;            
            transform: translate(400%,-50%);
            border: none;
            font-size: 40px;
            background-color: rgba( 255, 255, 255, 0);
            &:hover {
                color: #fff;
                transition: all 0.5s;
            }
        }
        .search-box {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(-60%,-50%);
            border: 1px solid #000;
            >button {
                padding: 10px;
                background-color: #ccc;
                border: none;
            }
            
            input {
                padding: 10px 10px;                
                border: none;
            }
        }
    }
    .menu-box {
        width: 100%;
        background-color: #ff6600;
        padding: 30px 0;
        display: block;
        position: absolute;
        max-height: 464px;
        transition: all 0.3s ease-in-out;
        z-index: 99;
        &.max-height {
        padding: 0;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        }
        
        .menu-box-margin {
            width: 1000px;
            margin: auto;
            display: flex;
            justify-content: space-around;
            

            ul {
                list-style: none;
                
                li {
                    padding: 2px 0;
                    cursor: pointer;
                    &:hover {
                        color: #fff;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;
const Header = () => {

    //상단 우측 검색 이미지 클릭시 바뀔 상태값
    const [SearchBtn,setSearchBtn] = React.useState(true);

    //상단 우측 검색 이미지 클릭시 발생할 이벤트
    const BtnClick = React.useCallback(e=>setSearchBtn(SearchBtn => !SearchBtn),[setSearchBtn])
    return (
        <HeaderCss>
            <div className='header-box'>
                <Link to='/login'>로그인/비로그인주문조회</Link>
                <Link to='/cart'>장바구니</Link>
                <Link to='/notice'>고객센터</Link>
            </div>
            <div className='header-box2'>
                <button onClick={BtnClick}>☰</button>
                <Link to='/'><h1>C P L Y</h1></Link>
                <div className='search-box'>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></button>
                <input type='text'></input>
                </div>
            </div>
            <div className={SearchBtn? ('menu-box max-height'):('menu-box')}>
                <div className='menu-box-margin'>
                    <ul>
                        <h2>아우터</h2>
                        <li><a>자켓</a></li>
                        <li><a>코트</a></li>
                        <li><a>점퍼</a></li>
                        <li><a>패딩</a></li>
                        <li><a>무스탕/퍼</a></li>
                        <li><a>가디건</a></li>
                        <li><a>야상</a></li>
                        <li><a>바람막이</a></li>
                    </ul>
                    <ul>
                        <h2>상의</h2>
                        <li><a>티셔츠</a></li>
                        <li><a>셔츠/남방</a></li>
                        <li><a>블라우스</a></li>
                        <li><a>니트/스웨터</a></li>
                        <li><a>후드</a></li>
                        <li><a>맨투맨</a></li>
                        <li><a>나시</a></li>

                    </ul>
                    <ul>
                        <h2>하의</h2>
                        <li><a>청바지</a></li>
                        <li><a>슬랙스</a></li>
                        <li><a>면바지</a></li>
                        <li><a>반바지</a></li>
                        <li><a>트레이닝</a></li>
                        <li><a>조거</a></li>

                    </ul>
                    <ul>
                        <h2>신발</h2>
                        <li><a>플랫/로퍼</a></li>
                        <li><a>샌들/슬리퍼</a></li>
                        <li><a>힐</a></li>
                        <li><a>스니커즈</a></li>
                        <li><a>부츠/워커</a></li>
                        <li><a>블로퍼/뮬</a></li>

                    </ul>
                    <ul>
                        <h2>악세사리</h2>
                        <li><a>가방</a></li>
                        <li><a>헤어악세사리</a></li>
                        <li><a>양말/스타킹</a></li>
                        <li><a>벨트</a></li>
                        <li><a>시계</a></li>
                        <li><a>모자</a></li>
                        <li><a>스카프/머플러</a></li>
                        <li><a>아이웨어</a></li>
                        <li><a>장갑/워커</a></li>
                        <li><a>목걸이</a></li>
                        <li><a>반지</a></li>
                        <li><a>기타</a></li>

                    </ul>
                </div>
            </div>
            <Outlet/>
        </HeaderCss>
    );
};

export default Header;