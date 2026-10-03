import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "os";
import { boolean } from "zod";

type User = {
  name: string;
  id?: string;
  email?: string;
  role: string;
};
type InitialState = { isAuthenticated: boolean; userInfo: null | User };

const initialState: InitialState = { isAuthenticated: false, userInfo: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStates: function (state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userInfo = action.payload.userInfo;
    },
    logout: function (state) {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
