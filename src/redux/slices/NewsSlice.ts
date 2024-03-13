import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
};

export const newsConfigSlice = createSlice({
  name: "newsConfig",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    reset: () => initialState,
  },
});

// ACTION
export const { setNews, reset } = newsConfigSlice.actions;

// REDUCER
export default newsConfigSlice.reducer;
