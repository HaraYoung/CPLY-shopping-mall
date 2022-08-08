import { configureStore } from "@reduxjs/toolkit";
import  detailGoodsSlice from "../slices/SJ/detailGoodsSlice";
<<<<<<< HEAD
import CartSlice from "../slices/SY/CartSlice";
=======
import orderStaterSlice from "../slices/SY/OrderStateSlice";
import UserSlice from '../slices/KH/UserSlice';
>>>>>>> 893205f2eceaac4d2a40be184f82bcd33c43fc4e

const store = configureStore({
  reducer: {
    detailGoods: detailGoodsSlice,
<<<<<<< HEAD
    CartSlice: CartSlice,
=======
    orderState: orderStaterSlice,
    user:UserSlice,
>>>>>>> 893205f2eceaac4d2a40be184f82bcd33c43fc4e
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
