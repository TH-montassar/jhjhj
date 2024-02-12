import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../action/auth.action";

interface AuthState {
  isAuthenticated: boolean;
  user: object | null; // Define your user type here
  pending: boolean | null;
  error: null | string | undefined | boolean;
  token: string | null;
  message: string | null | undefined;
  isSuccess: boolean | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  pending: null,
  error: null,
  message: null,
  isSuccess: null,
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.message = action.payload.message;
      state.isSuccess = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.pending = null;
      state.error = true;
      state.message = action.error.message;
      state.isSuccess = false;
      //console.log("Rejected with status code:", action.error.message);
    });
    builder.addCase(login.pending, (state) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.token = action.payload.user.token;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.pending = null;
      state.error = action.error.message;
      state.isAuthenticated = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      return state;
    });
  },
});

//export const { LOGIN, REGISTER } = authSlice.actions;

//export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
