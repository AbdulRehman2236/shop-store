import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import searchSlice from "./slices/searchSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    search: searchSlice,
  },
});

export default appStore;
