import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {pending,fulfilled,rejected} from '../../Util/Util';

const API_URL = 'http://localhost:3001/session/login'

//비동기 처리 함수 구현
export const postSession = createAsyncThunk("SessionSlice/postSession", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post(API_URL,{
            userid:payload.userid,
            userpw:payload.userpw
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});
//비동기 처리 함수 구현
export const getSession = createAsyncThunk("SessionSlice/getSession", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});
//비동기 처리 함수 구현
export const deleteSession = createAsyncThunk("SessionSlice/deleteSession", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.delete(API_URL);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//slice 정의
const SessionSlice = createSlice({
    name:'session',
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
        [postSession.pending] : pending,
        [postSession.fulfilled]: fulfilled,
        [postSession.rejected] : rejected,

        [getSession.pending] : pending,
        [getSession.fulfilled]: fulfilled,
        [getSession.rejected] : rejected,

        [deleteSession.pending] : pending,
        [deleteSession.fulfilled]: fulfilled,
        [deleteSession.rejected] : rejected,
    }
});

export default SessionSlice.reducer;
