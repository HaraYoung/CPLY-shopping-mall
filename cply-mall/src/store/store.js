import { configureStore } from "@reduxjs/toolkit";
import orderStaterSlice from "../slices/SY/OrderStateSlice";
import DetailGoods from "../slices/SJ/detailGoodsSlice";

const store = configureStore({
  reducer: {
    orderState: orderStaterSlice,
    detailGoods: DetailGoods,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
