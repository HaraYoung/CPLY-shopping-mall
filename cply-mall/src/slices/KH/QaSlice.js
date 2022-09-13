import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {pending,fulfilled,rejected} from '../../Util/Util';


const API_URL='http://localhost:3001/qa'

//비동기 처리 함수 구현
//단일 데이터 조회
export const getQaItem = createAsyncThunk("QaSlice/getQaItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(`${API_URL}/${payload.id}`);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//목록 데이터 조회
export const getQaList = createAsyncThunk("QaSlice/getQaList", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL,{
            userid:payload.userid
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 생성
export const postQaItem = createAsyncThunk("QaSlice/postQaItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post(API_URL,{
            title:payload.title,
            content:payload.content,
            success:payload.success,
            regdate:payload.regdate,
            editdate:payload.editdate,
            userid:payload.userid
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 수정
export const putQaItem = createAsyncThunk("QaSlice/putQaItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post(`${API_URL}/${payload.id}`,{
            title:payload.title,
            content:payload.content,
            success:payload.success,
            answer:payload.answer,
            editdate:payload.editdate
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 삭제
export const deleteQaItem = createAsyncThunk("QaSlice/deleteQaItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post(`${API_URL}/${payload.id}`);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});


//slice 정의
const QaSlice = createSlice({
    name:'qa',
    initialState: {
        data:null,
        loading:false,
        error:null
    },
    //내부 action 및 동기 action
    reducers: {},
        //외부 action 및 비동기 action(ajax용)
    //state:initialState , payload: getList에서 return된 result
    extraReducers: {
        [getQaItem.pending] : pending,
        [getQaItem.fulfilled]: fulfilled,
        [getQaItem.rejected] :rejected,
        
        [getQaList.pending] : pending,
        [getQaList.fulfilled]: fulfilled,
        [getQaList.rejected] :rejected,

        [postQaItem.pending] : pending,
        [postQaItem.fulfilled]: fulfilled,
        [postQaItem.rejected] :rejected,

        [putQaItem.pending] : pending,
        [putQaItem.fulfilled]: fulfilled,
        [putQaItem.rejected] :rejected,

        [deleteQaItem.pending] : pending,
        [deleteQaItem.fulfilled]: fulfilled,
        [deleteQaItem.rejected] :rejected,
    }
});

export default QaSlice.reducer;
