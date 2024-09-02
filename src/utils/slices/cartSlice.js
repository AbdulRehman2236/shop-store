import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalAmount: 0,
    cartCount: 0,
    cartItems: [],
    orderPlaced: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.items.id === action.payload.items.id);

      if (itemIndex !== -1) state.cartItems[itemIndex].quantity += 1;
      else state.cartItems.push({ ...action.payload, quantity: 1 });

      state.cartCount += 1;
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.items.id === action.payload.items.id);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity -= 1;
        if (state.cartItems[itemIndex].quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
        state.cartCount -= 1;
      }
    },
    calculateTotalAmount: (state, action) => {
      state.totalAmount += action.payload;
    },

    emptyCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.cartCount = 0;
    },

    setOrderPlaced: (state) => {
      state.orderPlaced = true;
    },

    resetOrderPlace: (state) => {
      state.orderPlaced = false;
    },
  },
});

export const { addItemToCart, removeItemFromCart, calculateTotalAmount, emptyCart, setOrderPlaced, resetOrderPlace } =
  cartSlice.actions;
export default cartSlice.reducer;
