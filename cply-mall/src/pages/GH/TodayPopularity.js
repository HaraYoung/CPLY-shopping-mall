import React from 'react';
import styled from 'styled-components';

const TodayPopularityCss = styled.div`
    width: 1000px;
    margin: auto;
    margin-bottom: 50px;
    .today-kind-button {
        position: relative;
        margin-bottom: 20px;
        >button {
            background-color: #000;
            color: #fff;
            padding: 5px 20px;
            font-size: 15px;
            border-radius: 5px;
            margin-right: 20px;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: #fff;
                color: #000;
                transition: all 0.3s ease-in-out;
            }
        }
        .today-view-more {
            position: absolute;
            right: 0;
            padding: 5px 20px;
            border-radius: 5px;
            text-decoration: none;
            color: #000;
            transition: all 0.3s ease-in-out;
            background-color: #fff;
            border: 2px solid #000;
            &:hover {
                background-color: #000;
                border: 2px solid #fff;
                color: #fff;
            }
        }
    }
    .today-flex-box {
        width: 100%;
        padding: 15px 15px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        box-sizing: border-box;
        background-color: #ccc;
        .today-flex-item{
            padding: 5px; 
            margin-bottom: 10px;
            
            .today-flex-item-img {
                width: 180px;
                height: 200px;
                background: #ff6600;
            }
            >h4 {
                margin: 0;
                font-size: 14px;
            }
        }
    }
`;
const TodayPopularity = () => {
    return (
        <TodayPopularityCss>
            <h1>Today 인기상품</h1>
            <div className='today-kind-button'>
                <button value="outer">아우터</button>
                <button value="top">상의</button>
                <button value="pants">하의</button>
                <button value="shoes">신발</button>
                <button value="acc">악세사리</button>
                <a href='#' className='today-view-more'>인기상품 더보기 ></a>
            </div>
            <div className='today-flex-box'>
                {/**ajax 후 반복문 처리 */}
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div> 
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
                <div className='today-flex-item'>
                    <div className='today-flex-item-img'></div>
                    <h3>상품이름</h3>
                    <h4>상품가격</h4>
                </div>
            </div>
        </TodayPopularityCss>
    );
};

export default TodayPopularity;