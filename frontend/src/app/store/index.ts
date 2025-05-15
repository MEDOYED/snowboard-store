import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signInSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
