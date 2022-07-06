import React, { memo } from 'react';
import styled from 'styled-components';
import RegexHelper from '../../libs/RegexHelper';
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
    const NotMembersSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;
        
        try {
            //주문번호 유효성
            RegexHelper.value(current.number,'주문번호를 입력하세요');
            RegexHelper.num(current.number,'주문번호는 숫자만 입력 가능합니다');
            //이름 유효성
            RegexHelper.value(current.name,'이름을 입력하세요');
            RegexHelper.korEng(current.name,'이름을 다시 확인하세요');
            RegexHelper.minLength(current.name,2,'이름을 다시 확인하세요');
            RegexHelper.maxLength(current.name,20,'이름을 다시 확인하세요');
            //전화번호 유효성
            RegexHelper.value(current.phone,'전화번호를 입력하세요');
            RegexHelper.num(current.phone,'전화번호는 숫자만 입력 가능합니다');
            RegexHelper.minLength(current.phone,10,'전화번호는 10자 이상부터 입력 가능합니다');
            RegexHelper.maxLength(current.phone,11,'전화번호는 11자 까지 입력 가능합니다');
        }catch(e) {
            window.alert(e.message);
            e.field.focus();
        }
    },[])
    return (
        <NotMembersCss>
            <form className='notmembers-user-info' onSubmit={NotMembersSubmit}>
                <input type='text' placeholder='주문번호' name='number'/>
                <input type='text' placeholder='이름' name='name'/>
                <input type='text' placeholder='(-)를 제외한 전화번호' name='phone'/>
                <button type='submit'>주문조회</button>
            </form>
        </NotMembersCss>
    );
});

export default NotMembers;