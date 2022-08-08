import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
import orderStaterSlice from "../slices/SY/OrderStateSlice";
import UserSlice from '../slices/KH/UserSlice';
import SessionSlice from "../slices/KH/SessionSlice";
const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
    orderState: orderStaterSlice,
    user:UserSlice,
    session:SessionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
