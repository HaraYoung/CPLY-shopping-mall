import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
import CartSlice from "../slices/SY/CartSlice";

const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
    CartSlice: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
