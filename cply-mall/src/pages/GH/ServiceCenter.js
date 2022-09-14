import React, { memo } from 'react';
import Board from './Board'
import {Routes,Route} from 'react-router-dom';
const ServiceCenter = memo(() => {
    return (
        <Board>
            <div className='board-contents'>
                
            </div>
        </Board>
    );
});

export default ServiceCenter;