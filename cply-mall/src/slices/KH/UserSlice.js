import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {pending,fulfilled,rejected} from '../../Util/Util';

const API_URL = 'http://localhost:3001/user';

//다중행 데이터 조회
export const getUserList = createAsyncThunk("UserSlice/getUserList", async (payload,{rejectWithValue})=> {
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
export const getUserItem = createAsyncThunk("UserSlice/getUserItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(`${API_URL}/${payload?.userid}/`);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});
//데이터 저장을 위한 비동기 함수
export const postUserItem = createAsyncThunk("UserSlice/postUserItem", async (payload,{rejectWithValue})=> {
    let result = null;
    try {
        result = await axios.post('http://localhost:3001/user',{
            userid:payload.userid,
            userpw:payload.userpw,
            username:payload.username,
            phone:payload.phone,
            snsRCPT:payload.snsRCPT,
            useremail:payload.useremail,
            emailRCPT:payload.emailRCPT,
            zonecode:payload.zonecode,
            addr1:payload.addr1,
            addr2:payload.addr2,
            regdate: payload.regdate,
            editdate:payload.editdate,
            point:payload.point
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});


//데이터 수정을 위한 비동기 함수
export const putUserItem = createAsyncThunk("UserSlice/putUserItem", async (payload,{rejectWithValue})=> {
    let result = null;
    const date = new Date();
    const nowDate = date.toLocaleDateString();
    try {
        result = await axios.put(`${API_URL}${payload.userid}/`,{
            userpw:payload.newpw1 ? payload.newpw1 : '',
            phone:payload.phone ? payload.phone : '',
            useremail:payload.useremail ? payload.useremail : '',
            zonecode:payload.zonecode ? payload.zonecode : '',
            addr1:payload.addr1 ? payload.addr1 : '',
            addr2:payload.addr2 ? payload.addr2 : '',
            editdate:nowDate ? payload.nowDate : '',
            point:payload.point ? payload.point : ''
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});


//데이터 삭제를 위한 비동기 함수
export const deleteUserItem = createAsyncThunk("UserSlice/deleteUserItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.delete(`${API_URL}${payload.userid}/`);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});


//slice 정의
const UserSlice = createSlice({
    name:'user',
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
        [getUserList.pending] : pending,
        [getUserList.fulfilled]: fulfilled,
        [getUserList.rejected] :rejected,

        
        [getUserItem.pending] : pending,
        [getUserItem.fulfilled]: fulfilled,
        [getUserItem.rejected] :rejected,

        [postUserItem.pending] : pending,
        [postUserItem.fulfilled]: fulfilled,
        [postUserItem.rejected] :(state,{payload})=> {
            return {
                data:payload?.data,
                loading:false,
                error: {
                    code:payload?.data?.rt ===200 ? payload?.data?.rt :490,
                    message: payload?.data?.rtmsg ? payload?.data?.rtmsg : (payload?.statusText ? payload.statusText : 'Server Error')
                }
            }
        },

        [putUserItem.pending] : pending,
        [putUserItem.fulfilled]: fulfilled,
        [putUserItem.rejected] :rejected,

        [deleteUserItem.pending] : pending,
        [deleteUserItem.fulfilled]: fulfilled,
        [deleteUserItem.rejected] :rejected,


    }
});

export default UserSlice.reducer;
