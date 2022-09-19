import React, { memo } from 'react';
import Board from './Board'
import {Routes,Route} from 'react-router-dom';
import ServiceCenterMenu from './ServiceCenterMenu';
import Qa from './Qa';
import QaAdd from './QaAdd';
import QaEdit from './QaEdit';
import QaInfo from './QaInfo';
const ServiceCenter = memo(() => {
    return (
        <Board>
            <ServiceCenterMenu/>
            <div className='board-contents'>
                <Routes>
                    <Route path='/'element={<QaAdd/>}/>
                    <Route path='faq'element={<QaAdd/>}/>
                    <Route path='qa'element={<Qa/>}/>
                    <Route path='qaadd' element={<QaAdd/>}/>
                    <Route path='qaedit'element={<QaEdit/>}/>
                    <Route path='qainfo/:id' element={<QaInfo/>}/>
                </Routes>
            </div>
        </Board>
    );
});

export default ServiceCenter;