import React, { memo } from 'react';
import styled from 'styled-components';

const JusoPopupCss = styled.div`
    width: 430px;
    height: 500px;
    background-color: #000;
`;


const JusoPopup = memo(() => {
    return (
        <JusoPopupCss>
            asdasd
        </JusoPopupCss>
    );
});

export default JusoPopup;