import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import searchSlice from "./slices/searchSlice";
import networkStatusSlice from "./slices/networkStatusSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    search: searchSlice,
    networkStatusSlice: networkStatusSlice,
  },
});

export default appStore;
