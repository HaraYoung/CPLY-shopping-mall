import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL='http://localhost:3001/aq'

//비동기 처리 함수 구현
export const getQaItem = createAsyncThunk("QaSlice/getQaItem", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.get(API_URL);
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
        [getQaItem.pending] : (state,{payload})=> {
            return {...state,loading:true}
        },
        [getQaItem.fulfilled]: (state,{payload})=> {
            return {
                data:payload?.data,
                loading:false,
                error:null
            }
        },
        [getQaItem.rejected] : (state,{payload})=> {
            return {
                data:payload?.data,
                loading:false,
                error: {
                    code:payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});

export default QaSlice.reducer;
