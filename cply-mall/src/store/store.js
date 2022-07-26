import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
import orderStaterSlice from "../slices/SY/OrderStateSlice";

const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
    orderState: orderStaterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
