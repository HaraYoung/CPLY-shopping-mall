import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
const FooterCss = styled.div`
    width: 100%;
    .footer-margin {
        background-color: #ccc;
        padding: 30px 0;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        
        .footer-box {
            >a {
                margin-right: 10px;
                text-decoration: none;
                color: #000;
                font-size: 18px;
                font-weight: bold;
                padding: 3px;
                &:hover {
                    color: #fff;
                    background-color: #000;
                    transition: all 0.3s ease-in-out;
                    border-radius: 5px;
                }
            }
            >p {
                font-size: 14px;
                padding-left: 3px
            }
        }
        .footer-box2 {
            >span {
                margin-right: 10px;
                font-size: 18px;
                font-weight: bold;
                padding: 3px;
            }
            >a {
                font-size: 18px;
                font-weight: bold;
                text-decoration: none;
                color: #000;
                padding: 3px;
                &:hover {
                    color: #fff;
                    background-color: #000;
                    transition: all 0.3s ease-in-out;
                    border-radius: 5px;
                }
            }
            >p {
                font-size: 14px;
                padding-left: 3px;
            }
        }
    }
`;
const Footer = () => {
    return (
        <FooterCss>
            <Outlet/>
            <div className='footer-margin'>
            <div className='footer-box'>
                <a href='#'>회사소개</a>
                <a href='#'>이용약관</a>
                <a href='#'>개인정보처리방침</a>
                <p>CPLY 주식회사 사업자등록번호 :123-45-56789<br/>사업장소재지 : Seoul Seocho-gu. 1303-37 서초W타워 13층</p>
            </div>
            <div className='footer-box2'>
                <span>고객센터: 1234-5678</span>                
                <p>운영시간 평일 11:00 ~ 18:00 (토,일 공휴일 휴무)<br/>점심시간 평일 13:00 ~ 14:00</p>
            </div>
            </div>
        </FooterCss>
    );
};

export default Footer;