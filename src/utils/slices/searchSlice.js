import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    showSearch: (state) => {
      state.showSearch = true;
    },

    hideSearch: (state) => {
      state.showSearch = false;
    },
  },
});

export const { showSearch, hideSearch } = searchSlice.actions;
export default searchSlice.reducer;
