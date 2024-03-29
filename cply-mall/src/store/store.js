import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
import CartSlice from "../slices/SY/CartSlice";
import UserSlice from '../slices/KH/UserSlice';
import SessionSlice from "../slices/KH/SessionSlice";
import SecessionSlice from "../slices/KH/SecessionSlice";
import SendMailSlice from "../slices/KH/SendMailSlice";
import BannerSlice from "../slices/KH/BannerSlice";
import QaSlice from "../slices/KH/QaSlice";
const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
    CartSlice: CartSlice,
    user:UserSlice,
    session:SessionSlice,
    secession:SecessionSlice,
    sendmail:SendMailSlice,
    banner:BannerSlice,
    qa:QaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
