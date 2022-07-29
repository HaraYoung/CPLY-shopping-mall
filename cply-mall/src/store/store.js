import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
import basicsSlice from "../slices/SY/basicsSlice";

const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
    basicsSlice: basicsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
