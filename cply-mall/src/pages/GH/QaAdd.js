import React, { memo } from 'react';
import styled from 'styled-components';
import { getSession } from '../../slices/KH/SessionSlice';
import { useDispatch,useSelector } from 'react-redux';
import {postQaItem} from '../../slices/KH/QaSlice'
import RegexHelper from "../../libs/RegexHelper";
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Spinner from '../../components/Spinner';
import ErrorView from '../../components/ErrorView';
const QaAddCss = styled.div`
    width: 100%;
    display: block;
    >h1 {
        margin-top: 0;
        margin-bottom: 40px;
    }
    >form {        
        >input {
            width: 100%;
            box-sizing: border-box;
            display: block;
            padding: 10px;
            font-size: 15px;
            margin-bottom: 20px;
        }
        .content {
            width: 100%;
            box-sizing: border-box;
            display: block;
            margin-bottom: 20px;
            padding: 10px;
            font-size: 15px;
            height: 300px;                
        }
        button {
            width: 100%;
            padding: 1% 5%;
            border-radius: 5px;
            background-color: #000;
            color: #fff;
            font-size: 1em;
            margin-top: 3%;
            cursor: pointer;
            &:hover {
            background: #fff;
            color: #000;
            transition: all 0.4s ease-in-out;
            border: 2px solid #000;
            }
        }
    }
`;
const QaAdd = memo(() => {
    const navigate = useNavigate();
    
    //리덕스 초기화

    const dispatch = useDispatch()

    const  {data,loading,error} = useSelector((state)=> state.session);

    //상태값
    const [qaAddCheck,setQaAddCheck] = React.useState({
        blo1:false,
        blo2:false,
        userid:''
    })

    
    React.useEffect(()=> {
        
        dispatch(getSession())
        setQaAddCheck({
            ...qaAddCheck,
            blo1:true
        })
    },[dispatch])
    React.useEffect(()=> {
        if (qaAddCheck.blo1) {
            if (data.item !== null && data.item !==undefined) {
                setQaAddCheck({
                    ...qaAddCheck,
                    userid:data.item.userid
                })
                console.log (data.item.userid)
            }else {
                setQaAddCheck({
                    ...qaAddCheck,
                    blo1:false
                })
                return;
            }
        }
    },[data])

    const qaAddSubmit = React.useCallback((e)=> {
        e.preventDefault();

        const current = e.target;

        try {
            RegexHelper.value(current.title,'제목을 확인해주세요')
            RegexHelper.maxLength(current.title,30,'제목은 30글자까지 입력 가능합니다')
            RegexHelper.value(current.content,'내용을 확인해주세요')
        }catch(e){
            window.alert(e.message);
            e.field.focus();
            return;
        }
        dispatch(postQaItem({
            title:current.title.value,
            content:current.content.value,
            success:'N',
            regdate:dayjs().format("YYYY-MM-DD HH:mm:ss"),
            editdate:dayjs().format("YYYY-MM-DD HH:mm:ss"),
            userid:qaAddCheck.userid
        }))
        navigate('/servicecenter/qa')
    },[])
    return (
        <QaAddCss>
            <Spinner visible={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ): (
                data && (
                    <>
                    <h1>문의 작성</h1>
                    <form onSubmit={qaAddSubmit}>
                    <input type='text' name='title' placeholder='제목을 작성해 주세요'/>
                    <textarea name='content' className='content' placeholder='내용을 작성해 주세요'/>
                    <button type='submit'>등록하기</button>
                    </form>
                    </>
                )
            )}
        </QaAddCss>
    );
});

export default QaAdd;