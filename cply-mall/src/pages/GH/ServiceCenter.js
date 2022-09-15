import React, { memo } from 'react';
import Board from './Board'
import {Routes,Route} from 'react-router-dom';
import ServiceCenterMenu from './ServiceCenterMenu';
import Qa from './Qa';
import QaWrite from './QaWrite';
import QaUpdate from './QaUpdate';
const ServiceCenter = memo(() => {
    return (
        <Board>
            <ServiceCenterMenu/>
            <div className='board-contents'>
                <Routes>
                    <Route path='/'element={<QaWrite/>}/>
                    <Route path='faq'element={<QaWrite/>}/>
                    <Route path='qa'element={<Qa/>}/>
                    <Route path='qawrite' element={<QaWrite/>}/>
                    <Route path='qaupdate'element={<QaUpdate/>}/>
                </Routes>
            </div>
        </Board>
    );
});

export default ServiceCenter;