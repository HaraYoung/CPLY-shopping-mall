import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import orderStaterSlice from "../slices/SY/OrderStateSlice";
import DetailGoods from "../slices/SJ/detailGoodsSlice";

const store = configureStore({
  reducer: {
    orderState: orderStaterSlice,
    detailGoods: DetailGoods,
=======
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
import CartSlice from "../slices/SY/CartSlice";
import UserSlice from '../slices/KH/UserSlice';

const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
    CartSlice: CartSlice,
    user:UserSlice,
>>>>>>> 8937d41dd5d2c98998f3dd577f78b41c3b27ff62
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
