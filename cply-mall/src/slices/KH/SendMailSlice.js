import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//비동기 처리 함수 구현
export const postSendMail = createAsyncThunk("SendMailSlice/postSendMail", async (payload,{rejectWithValue})=> {
    let result = null;

    try {
        result = await axios.post('http://localhost:3001/send_mail',{
            receiver_name:payload.receiver_name,
            receiver_email:payload.receiver_email,
            content:`임시 비밀번호 : ${payload.content}`
        });
    }catch(err) {
        //에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected의 함수가 호출된다
        result = rejectWithValue(err.response);
    }
    return result;
});

//slice 정의
const SendMailSlice = createSlice({
    name:'sendmail',
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
        [postSendMail.pending] : (state,{payload})=> {
            return {...state,loading:true}
        },
        [postSendMail.fulfilled]: (state,{payload})=> {
            return {
                data:payload?.data,
                loading:false,
                error:null
            }
        },
        [postSendMail.rejected] : (state,{payload})=> {
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

export default SendMailSlice.reducer;
