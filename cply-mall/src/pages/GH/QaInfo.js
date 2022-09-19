import React, { memo } from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import { getQaItem,deleteQaItem } from '../../slices/KH/QaSlice';
import { useParams,useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import ErrorView from '../../components/ErrorView';
import { useLocation } from 'react-router-dom';


const QaInfoCss = styled.div`
    width: 100%;
    display: block;
    position: relative;
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

    }
    >div {
        position: absolute;
        right: 0;
        
        span {
            display:inline-block;
            color: #fff;
            background-color: #000;
            padding: 5px 7px;
            margin: 5px 3px;
            border-radius: 5px;
            border: 1px solid #000;
            &:hover {
                background-color: #fff;
                transition: all 0.3s;
                cursor: pointer;
                color: #000;
                border: 1px solid #000;
            }
        }
    }
`;



const QaInfo = memo(() => {
    const {id} = useParams();

    const navigate = useNavigate();
    //리덕스 초기화
    const dispatch = useDispatch()
    
    const location = useLocation();
    const {data,loading,error} = useSelector((state)=> state.qa);

    React.useEffect(()=> {
        dispatch(getQaItem({
            id:id
        }))
    },[dispatch])

    const ListButton = React.useCallback((e)=> {
        e.preventDefault();

        
        window.location.replace('/servicecenter/qa')
    },[navigate])

    const AddButton = React.useCallback((e)=> {
        e.preventDefault();

        navigate('/servicecenter/qaedit')
    },[])

    const DeleteButton = React.useCallback((e)=> {        
        dispatch(deleteQaItem({
            id:id
        }))
        window.location.replace('/servicecenter/qa')
    },[dispatch])
    return (
        <QaInfoCss>
            <Spinner visible={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ): (
                data && (
                    <>
                    <h1>문의 상세</h1>
                    <form>
                    <input type='text' name='title' value={data.item.title} disabled/>
                    <textarea name='content' className='content' value={data.item.content} disabled/>
                    {data.item.answer ? (
                        <textarea name='answer' className='content' value={data.item.answer} disabled/>
                    ): ''}
                    </form>
                    <div>
                        <span onClick={ListButton}>목록</span>
                        {data.item.answer !== null && data.item.answer !== '' ? '':(<span onClick={AddButton}>수정</span>)}
                        <span onClick={DeleteButton}>삭제</span>
                    </div>
                    </>
                )
            )}
        </QaInfoCss>
    );
});

export default QaInfo;