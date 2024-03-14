import { configureStore } from "@reduxjs/toolkit";
import newsConfigReducer from "./slices/NewsSlice";
import cosmeticsConfigReducer from "./slices/CosmeticsSlice";
import loginConfigReducer from "./slices/LoginSlice";

export const store = configureStore({
  reducer: {
    newsConfig: newsConfigReducer,
    cosmeticsConfig: cosmeticsConfigReducer,
    loginConfig: loginConfigReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
