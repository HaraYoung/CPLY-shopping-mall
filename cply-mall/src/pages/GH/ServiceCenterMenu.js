import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import BoardList from './BoardList';
const ServiceCenterMenu = memo(() => {
    return (
        <BoardList>
            <div className='board-list-box1'>
                <div className='menu'>
                    <h1>고객센터</h1>
                    <ul>
                        <li>
                            <Link to='/notice/'>고객센터</Link>
                        </li>
                        <li>
                            <Link to='/faq'>자주 묻는 질문</Link>
                        </li>
                        <li>
                            <Link to='/qa'>내 문의 내역</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </BoardList>
    );
});

export default ServiceCenterMenu;