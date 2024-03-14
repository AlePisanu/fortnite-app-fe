import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false
};

export const loginConfigSlice = createSlice({
  name: "loginConfig",
  initialState,
  reducers: {
    setLogged: (state, action) => {
      state.logged = action.payload;
    },
    reset: () => initialState,
  },
});

// ACTION
export const { setLogged, reset } = loginConfigSlice.actions;

// REDUCER
export default loginConfigSlice.reducer;
