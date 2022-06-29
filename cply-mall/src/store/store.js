import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";

const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
