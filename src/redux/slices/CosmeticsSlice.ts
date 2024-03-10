import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cosmetics: []
};

export const cosmeticsConfigSlice = createSlice({
  name: "cosmeticsConfig",
  initialState,
  reducers: {
    setCosmetics: (state, action) => {
      state.cosmetics = action.payload
    },
    reset: () => initialState
  }
});

// ACTION
export const {
  setCosmetics,
  reset
} = cosmeticsConfigSlice.actions;

// REDUCER
export default cosmeticsConfigSlice.reducer;
