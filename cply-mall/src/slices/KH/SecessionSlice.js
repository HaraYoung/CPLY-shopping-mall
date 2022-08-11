import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {pending,fulfilled,rejected} from '../../Util/Util';

const API_URL = 'http://localhost:3001/secession';

//다중행 조회
export const getSecssionList = createAsyncThunk("SecessionSlice/getSecssionList", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//단일행 데이터 조회를 위한 비동기 함수
export const getSecessionItem = createAsyncThunk("UserSlice/getSecessionItem", async (payload,{rejectWithValue})=> {
    let result = null;
    console.log (payload.userpw)
    try {
        result = await axios.get(`${API_URL}/${payload?.secessionid}/`);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 저장을 위한 비동기 함수
export const postSecessionItem = createAsyncThunk("UserSlice/postSecessionItem", async (payload,{rejectWithValue})=> {
    let result = null;
    try {
        result = await axios.post(API_URL,{
            userid:payload.userid,
            reason:payload.reason,
            regdate:payload.regdate
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});


//데이터 삭제를 위한 비동기 함수
export const deleteSecessionItem = createAsyncThunk("UserSlice/deleteSecessionItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.delete(`${API_URL}${payload.secessionid}/`);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});


//slice 정의
const SecessionSlice = createSlice({
    name:'secession',
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
        [getSecssionList.pending] : pending,
        [getSecssionList.fulfilled]: fulfilled,
        [getSecssionList.rejected] :rejected,

        
        [getSecessionItem.pending] : pending,
        [getSecessionItem.fulfilled]: fulfilled,
        [getSecessionItem.rejected] :rejected,

        [postSecessionItem.pending] : pending,
        [postSecessionItem.fulfilled]: fulfilled,
        [postSecessionItem.rejected] :rejected,

        
        [deleteSecessionItem.pending] : pending,
        [deleteSecessionItem.fulfilled]: fulfilled,
        [deleteSecessionItem.rejected] :rejected,
    }
});

export default SecessionSlice.reducer;
