import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

    //?????? ?????? ?????? ????????? ????????? ?????? ?????????
    const [SearchBtn,setSearchBtn] = React.useState(true);

    //?????? ?????? ?????? ????????? ????????? ????????? ?????????
    const BtnClick = React.useCallback(e=>setSearchBtn(SearchBtn => !SearchBtn),[setSearchBtn])
    return (
        <HeaderCss>
            <div className='header-box'>
                <Link to='/login'>?????????/????????????????????????</Link>
                <Link to='/cart'>????????????</Link>
                <Link to='/notice'>????????????</Link>
            </div>
            <div className='header-box2'>
                <button onClick={BtnClick}>???</button>
                <Link to='/'><h1>C P L Y</h1></Link>
                <div className='search-box'>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></button>
                <input type='text'></input>
                </div>
            </div>
            <div className={SearchBtn? ('menu-box max-height'):('menu-box')}>
                <div className='menu-box-margin'>
                    <ul>
                        <h2>?????????</h2>
                        <li><a>??????</a></li>
                        <li><a>??????</a></li>
                        <li><a>??????</a></li>
                        <li><a>??????</a></li>
                        <li><a>?????????/???</a></li>
                        <li><a>?????????</a></li>
                        <li><a>??????</a></li>
                        <li><a>????????????</a></li>
                    </ul>
                    <ul>
                        <h2>??????</h2>
                        <li><a>?????????</a></li>
                        <li><a>??????/??????</a></li>
                        <li><a>????????????</a></li>
                        <li><a>??????/?????????</a></li>
                        <li><a>??????</a></li>
                        <li><a>?????????</a></li>
                        <li><a>??????</a></li>

                    </ul>
                    <ul>
                        <h2>??????</h2>
                        <li><a>?????????</a></li>
                        <li><a>?????????</a></li>
                        <li><a>?????????</a></li>
                        <li><a>?????????</a></li>
                        <li><a>????????????</a></li>
                        <li><a>??????</a></li>

                    </ul>
                    <ul>
                        <h2>??????</h2>
                        <li><a>??????/??????</a></li>
                        <li><a>??????/?????????</a></li>
                        <li><a>???</a></li>
                        <li><a>????????????</a></li>
                        <li><a>??????/??????</a></li>
                        <li><a>?????????/???</a></li>

                    </ul>
                    <ul>
                        <h2>????????????</h2>
                        <li><a>??????</a></li>
                        <li><a>??????????????????</a></li>
                        <li><a>??????/?????????</a></li>
                        <li><a>??????</a></li>
                        <li><a>??????</a></li>
                        <li><a>??????</a></li>
                        <li><a>?????????/?????????</a></li>
                        <li><a>????????????</a></li>
                        <li><a>??????/??????</a></li>
                        <li><a>?????????</a></li>
                        <li><a>??????</a></li>
                        <li><a>??????</a></li>

                    </ul>
                </div>
            </div>
        </HeaderCss>
    );
};

export default Header;