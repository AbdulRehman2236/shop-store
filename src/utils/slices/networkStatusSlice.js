import { createSlice } from "@reduxjs/toolkit";

const networkStatusSlice = createSlice({
  name: "networkStatusSlice",
  initialState: {
    onlineStatus: true,
  },
  reducers: {
    setOnlineStatus: (state, action) => {
      state.onlineStatus = action.payload;
    },
  },
});

export const { setOnlineStatus } = networkStatusSlice.actions;
export default networkStatusSlice.reducer;
