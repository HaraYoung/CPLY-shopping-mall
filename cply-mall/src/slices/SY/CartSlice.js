import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pending, fulfilled, rejected } from "../../components/Util";
import axios from "axios";
import { cloneDeep } from "lodash";

const API_URL = "http://localhost:3001/cart/";

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk(
  "CartSlice/getList",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(API_URL);
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk(
  "CartSlice/postItem",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.post(API_URL, {
        qty: payload.qty,
        goodsOption: payload.goodsOption,
        goodnumber: payload.goodnumber,
        userid: payload.userid,
      });
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk(
  "CartSlice/putItem",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.put(`${API_URL}${payload.id}/`, {
        id: payload.id,
        qty: payload.qty,
        goodsOption: payload.goodsOption,
        goodnumber: payload.goodnumber,
        userid: payload.userid,
      });
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk(
  "CartSlice/deleteItem",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.delete(`${API_URL}${payload.id}/`);
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    loading: false, // 로딩상태를 관리하기 위한 상태값
    data: null,
    error: null, // 에러여부를 관리하기 위한 상태값
  },
  reducers: {
  },
  extraReducers: {
    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,

    /** 데이터 저장을 위한 액션 함수 */
    [postItem.pending]: pending,
    [postItem.fulfilled]: (state, { meta, payload }) => {
      // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다)
      const data = cloneDeep(state.item);
      console.log(data);

      // 새로 저장된 결과를 기존 상태값 배열의 맨 앞에 추가한다.
      data.unshift(payload.item);

      // 기존의 상태값 배열에서 맨 마지막 항목은 삭제한다.
      data.pop();

      return {
        data: data,
        loading: false,
        error: null,
      };
    },
    [postItem.rejected]: rejected,

    /** 데이터 수정을 위한 액션 함수 */
    [putItem.pending]: pending,
    [putItem.fulfilled]: (state, { meta, payload }) => {
      // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다)
      const data = cloneDeep(state.item);
      console.log(data);

      // 기존의 데이터에서 수정이 요청된 항목의 위치를 검색한다.
      const index = data.findIndex(
        (element) => element.id === parseInt(meta.arg.id)
      );

      if (index !== undefined) {
        data.splice(index, 1, payload.data);
      }

      return {
        data: data,
        loading: false,
        error: null,
      };
    },
    [putItem.rejected]: rejected,

    /** 데이터 삭제 위한 액션 함수 */
    [deleteItem.pending]: pending,
    [deleteItem.fulfilled]: (state, { meta, payload }) => {
      // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다)
      const data = cloneDeep(state.data);
      console.log(data);

      // 기존의 데이터에서 삭제가 요청된 항목의 위치를 검색한다.
      const index = data.item.findIndex(
        (element) => element.id === parseInt(meta.arg.id)
      );
      console.log("index=" + index);

      // 검색이 되었다면 해당 항목을 삭제한다.
      if (index !== undefined) {
        data.item.splice(index, 1);
      }
      console.log(data);

      return {
        data: data,
        loading: false,
        error: null,
      };
    },
    [deleteItem.rejected]: rejected,

  },
});
//export const {plus, minus} = CartSlice.actions;
export default CartSlice.reducer;
