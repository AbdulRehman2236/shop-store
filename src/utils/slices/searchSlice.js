import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    showSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { showSearch } = searchSlice.actions;
export default searchSlice.reducer;
