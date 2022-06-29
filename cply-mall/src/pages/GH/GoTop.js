import React, { memo } from 'react';
import styled from 'styled-components';

import btnTop from '../assets/img/goTop.png';

const TopButton =styled.button`
    width: 70px;
    height: 70px;
    background: url(${btnTop}) center center no-repeat;
    background-size: 100% 100%;
    border: 0;
    cursor: pointer;
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 100;
`;

//버튼클릭시 맨위로 올려주는 기능을 가진 컴포넌트
const GoTop = memo(() => {
    return (
        <TopButton onClick={e=> {
            window.scroll({top:0,behavior:'smooth'});
        }}/>
    );
});

export default GoTop;