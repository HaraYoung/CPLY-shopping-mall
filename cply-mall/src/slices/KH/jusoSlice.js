import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/* 비동기 처리 함수 구현 */
export const getJuso = createAsyncThunk(
  "jusoSlice/getJuso",
  async (payload, { rejectWidthValue }) => {
    let result = payload;

    
    return result;
  }
);

/* Slice 정의 (Action 함수 + Reducer의 개념) */
const jusoSlice = createSlice({
  name: "juso",

  // 이 모듈이 관리하고자 하는 상태값들을 명시
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  // 내부 action 및 동기 action.
  // 상태값을 갱신하기 위한 함수들을 구현
  // 컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 action.payload로 전달된다.
  // initalState와 동일한 구조의 JSON을 리턴한다.
  reducers: {
    jusoInfo: (state,action) => {
        
        return {data:action.payload}
    }
  },

  // 외부 action 및 비동기 action.(Ajax용)
  extraReducers: {
    [getJuso.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getJuso.fulfilled]: (state, { payload }) => {
        console.log (payload);
        console.log ('asdad');
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [getJuso.rejected]: (state, { payload }) => {
      return {
        data:payload,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

export const {jusoInfo} = jusoSlice.actions;

// 리듀서 객체 내보내기
export default jusoSlice.reducer;
