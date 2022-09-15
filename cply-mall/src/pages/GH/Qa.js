import React, { memo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import ErrorView from '../../components/ErrorView';
import {getQaList} from '../../slices/KH/QaSlice';
import { getSession } from '../../slices/KH/SessionSlice';
import styled from 'styled-components';

const QaCss = styled.div`
    width: 100%;
    display: block;
    >h1 { 
        margin-bottom: 40px;
    }
`;
const Qa = memo(() => {
    //리덕스 초기화
    const dispatch = useDispatch();

    const {data:data1,loading:loading1,error:error1} = useSelector((state)=>state.session)
    const {data:data2,loading:loading2,error:error2} = useSelector((state)=>state.qa)


    //상태값
    const [qaLogin,setQaLogin] = React.useState({
        blo1:false,
        blo2:false,
    })
    React.useEffect(()=> {
        dispatch(getSession())
        setQaLogin({
            ...qaLogin,
            blo1:true
        })
    },[dispatch])

    React.useEffect(()=> {
        if (qaLogin.blo1) {
            if (data1.item !== null && data1.item !== undefined) {
                dispatch(getQaList({
                    userid:data1.item.userid
                }))
            }else {
                return;
            }
        }
    },[data1])
    return (
        <div>
            <Spinner visible={loading2}/>
            {error2 ? (
                <ErrorView error={error2}/>
            ):(
                data2 && (
                    <QaCss>
                        <h1>내 문의 내역</h1>
                    </QaCss>
                )
            )}
        </div>
    );
});

export default Qa;