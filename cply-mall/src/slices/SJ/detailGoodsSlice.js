import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* 비동기 처리 함수 구현 */
export const getDetail = createAsyncThunk(
  "detailGoods/getDetail",
  async (payload, { rejectWidthValue }) => {
    let result = null;

    try {
      result = await axios.get();
    } catch (err) {
      // 에러 발생 시 'rejectWidthValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
      result = rejectWidthValue(err.response);
    }
    return result;
  }
);

/* Slice 정의 (Action 함수 + Reducer의 개념) */
const detailGoodsSlice = createSlice({
  name: "detailGoods",

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
  reducers: {},

  // 외부 action 및 비동기 action.(Ajax용)
  extraReducers: {
    [getDetail.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getDetail.fulfilled]: (state, { meta, payload }) => {
      return {
        meta: payload?.data,
        documents: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getDetail.rejected]: (state, { payload }) => {
      return {
        meta: null,
        documents: null,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

// 리듀서 객체 내보내기
export default detailGoodsSlice.reducer;
