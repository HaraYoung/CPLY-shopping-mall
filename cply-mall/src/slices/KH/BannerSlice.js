import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {pending,fulfilled,rejected} from '../../Util/Util';

const API_URL='http://localhost:3001/banner';

//비동기 처리 함수 구현
//단일 데이터 조회
export const getBannerItem = createAsyncThunk("BannerSlice/getBannerItem", async (payload,{rejectWithValue})=> {
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
export const getBannerList = createAsyncThunk("BannerSlice/getBannerList", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL);
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 생성
export const postBannerItem = createAsyncThunk("BannerSlice/postBannerItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post(API_URL,{
            url:payload.url
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 수정
export const putBannerItem = createAsyncThunk("BannerSlice/putBannerItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post(`${API_URL}/${payload.id}`,{
            url:payload.url
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//데이터 삭제
export const deleteBannerItem = createAsyncThunk("BannerSlice/deleteBannerItem", async (payload,{rejectWithValue})=> {
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
const BannerSlice = createSlice({
    name:'banner',
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
        [getBannerItem.pending] : pending,
        [getBannerItem.fulfilled]: fulfilled,
        [getBannerItem.rejected] :rejected,

        [getBannerList.pending] : pending,
        [getBannerList.fulfilled]: fulfilled,
        [getBannerList.rejected] :rejected,

        [postBannerItem.pending] : pending,
        [postBannerItem.fulfilled]: fulfilled,
        [postBannerItem.rejected] :rejected,

        [putBannerItem.pending] : pending,
        [putBannerItem.fulfilled]: fulfilled,
        [putBannerItem.rejected] :rejected,

        [deleteBannerItem.pending] : pending,
        [deleteBannerItem.fulfilled]: fulfilled,
        [deleteBannerItem.rejected] :rejected,
    }
});

export default BannerSlice.reducer;
