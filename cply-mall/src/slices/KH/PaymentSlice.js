import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {pending,fulfilled,rejected} from '../../Util/Util';
import dayjs from 'dayjs';

const API_URL = 'http://localhost:3001/payment';

//단일행 비동기 처리 함수 구현
export const getPaymentItem = createAsyncThunk("PaymentSlice/getPaymentItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//다중행 데이터 조회
export const getPaymentList = createAsyncThunk("PaymentSlice/getPaymentList", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 저장을 위한 비동기 함수
export const postPaymentItem = createAsyncThunk("PaymentSlice/postPaymentItem", async (payload,{rejectWithValue})=> {
    let result = null;
    try {
        result = await axios.post(API_URL,{
            orderdate:dayjs().format("YYYY-MM-DD"),
            memo:payload.memo,
            orderstate:'1',
            name:payload.name,
            phone:payload.phone,
            zonecode:payload.phone,
            addr1:payload.addr1,
            addr2:payload.addr2,
            user_id:payload.user_id,
            product:payload.product,
            username:payload.username,
            state:"1",

        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 수정을 위한 비동기 함수
export const putPaymentItem = createAsyncThunk("PaymentSlice/putPaymentItem", async (payload,{rejectWithValue})=> {
    let result = null;
    try {
        result = await axios.put(`${API_URL}/${payload.userid}/`,{

        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 삭제를 위한 비동기 함수
export const deletePaymentItem = createAsyncThunk("PaymentSlice/deletePaymentItem", async (payload,{rejectWithValue})=> {
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
const PaymentSlice = createSlice({
    name:'payment',
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

        [getPaymentItem.pending] : pending,
        [getPaymentItem.fulfilled]: fulfilled,
        [getPaymentItem.rejected] : rejected,

        [getPaymentList.pending] : pending,
        [getPaymentList.fulfilled]: fulfilled,
        [getPaymentList.rejected] : rejected,

        [postPaymentItem.pending] : pending,
        [postPaymentItem.fulfilled]: fulfilled,
        [postPaymentItem.rejected] : rejected,

        [putPaymentItem.pending] : pending,
        [putPaymentItem.fulfilled]: fulfilled,
        [putPaymentItem.rejected] : rejected,

        [deletePaymentItem.pending] : pending,
        [deletePaymentItem.fulfilled]: fulfilled,
        [deletePaymentItem.rejected] : rejected,

    }
});

export default PaymentSlice.reducer;
