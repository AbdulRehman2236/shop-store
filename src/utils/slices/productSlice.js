import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    sortedProducts: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addSortedProducts: (state, action) => {
      state.sortedProducts = action.payload;
    },
  },
});

export const { addProducts, addSortedProducts } = productSlice.actions;
export default productSlice.reducer;
