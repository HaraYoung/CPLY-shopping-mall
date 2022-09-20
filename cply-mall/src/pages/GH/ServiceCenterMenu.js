import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getSession } from '../../slices/KH/SessionSlice';
import BoardList from './BoardList';
const ServiceCenterMenu = memo(() => {
    //리덕스 초기화
    const dispatch = useDispatch();

    const {data,loading,error} = useSelector((state)=>state.session)

    //상태값 
    const [checkLogin,setCheckLogin] = React.useState({
        blo1:false,
        blo2:false
    });

    React.useEffect(()=> {
        dispatch(getSession())
        setCheckLogin({
            ...checkLogin,
            blo1:true
        })
    },[dispatch])

    React.useEffect(()=> {
        if (checkLogin.blo1){
            if (data.item !== null && data.item !== undefined) {
                setCheckLogin({
                    ...checkLogin,
                    blo2:true
                })
            }else {
                return
            }
        }    
    },[data])
    return (
        <BoardList>
            <div className='board-list-box1'>
                <div className='menu'>
                    <h1>고객센터</h1>
                    <ul>
                        <li className='list list2'>
                            <Link to='/servicecenter/'>고객센터</Link>
                        </li>
                        <li className='list list2'>
                            <Link to='faq'>자주 묻는 질문</Link>
                        </li>
                        {checkLogin.blo2 ? (
                        <li className='list list2'>
                            <Link to='qa'>내 문의 내역</Link>
                        </li>
                        ):('')}
                    </ul>
                </div>
            </div>
        </BoardList>
    );
});

export default ServiceCenterMenu;