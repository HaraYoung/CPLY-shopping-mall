import React, { memo } from 'react';
import styled from 'styled-components';

const NotMembersCss = styled.div`

    .notmembers-user-info {
        margin-top: 50px;
        width: 100%;
        >input {
            box-sizing: border-box;
            width: 100%;
            padding: 15px;
            font-size: 16px;
            margin-bottom: 20px;
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
            margin-top: 20px;
        }
    }
`;

const NotMembers = memo(() => {
    return (
        <NotMembersCss>
            <form className='notmembers-user-info'>
                <input type='text' placeholder='주문번호' name='number'/>
                <input type='text' placeholder='아이디' name='id'/>
                <input type='text' placeholder='(-)를 제외한 전화번호' name='phone'/>
                <button type='submit'>주문조회</button>
            </form>
        </NotMembersCss>
    );
});

export default NotMembers;