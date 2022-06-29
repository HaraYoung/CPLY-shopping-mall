import React, { memo } from 'react';
import styled from 'styled-components';

const FindIdCss = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .findid-box {
        padding: 30px;
        border: 3px solid #ccc;
        margin: auto;
        width: 20%;
        height: 50vh;
        .findid-box-title {
            text-align: center;
            >h1 {
                font-size: 36px;
                margin-top: 0;
                margin-bottom: 50px;
            }
            >p {
                font-size: 13px;
            }

        }
        >form {
            margin-top: 60px;
            >label {
                font-weight: bold;
            }
            >input {
                box-sizing: border-box;
                width: 100%;
                padding: 15px;
                font-size: 16px;
                margin: 20px 0;
                border-radius: 10px;
                border: 1px solid #000;
            }
            >button {
                width: 100%;
                font-size: 20px;
                background-color: #e74c3c;
                color: #fff;
                padding: 10px 0;
                border: none;
                border-radius: 5px;
                margin-top: 50px;
            }
        }
    }
`;

const FindId = memo(() => {
    return (
        <FindIdCss>
            <div className='findid-box'>
                <div className='findid-box-title'>
                    <h1>아이디 찾기</h1>
                    <p>가입시 등록한 전화번호를 입력하시면<br/>아이디의 일부를 알려드립니다</p>
                </div>
                <form>
                    <label htmlFor='phone'>
                        가입시 등록한 전화번호
                    </label>
                    <input name='phone' placeholder='(-)를 제외한 전화번호'></input>
                    <button type='submit'>아이디 찾기</button>
                </form>
            </div>
        </FindIdCss>
    );
});

export default FindId;