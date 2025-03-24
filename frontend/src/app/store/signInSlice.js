import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleSignIn: (state) => {
      state.isActive = !state.isActive;
    },
    setSignInState: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { toggleSignIn, setSignInState } = signInSlice.actions;

export default signInSlice.reducer;
