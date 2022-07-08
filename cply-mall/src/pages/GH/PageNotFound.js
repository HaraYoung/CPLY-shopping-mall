import React, { memo } from 'react';
import styled from 'styled-components';

const PageNotFoundCss =styled.div`
    text-align: center;
    h1 {
        font-size: 150px;
        font-weight: bold;
    }
`;
const PageNotFound = memo(() => {
    return (
        <div>
            <h1>PageNotFound</h1>
        </div>
    );
});

export default PageNotFound;