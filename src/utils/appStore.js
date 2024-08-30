import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default appStore;
