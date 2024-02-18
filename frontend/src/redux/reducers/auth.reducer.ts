import { createSlice } from "@reduxjs/toolkit";
import { authCheck, login, logout, register } from "../action/auth.action";

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
      state.isSuccess = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.message = action.payload.message;
      state.isSuccess = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.pending = false;
      state.isSuccess = false;
      state.error = action.error.message;
      // @ts-ignore
      state.message = action.payload.message;
      state.isAuthenticated = false;
    });
    builder.addCase(login.pending, (state) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      // state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore proble
      state.message = action.payload.message;
      //state.error = action.error.message;
      state.isAuthenticated = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      return state;
    });

    builder.addCase(authCheck.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.pending = false;
      return state;
    });

    builder.addCase(authCheck.pending, (state, action) => {
      state.pending = true;
      return state;
    });

    builder.addCase(authCheck.rejected, (state, action) => {
      state.pending = false;
      state.isAuthenticated = false;
      // @ts-ignore proble
      state.error = action.payload.message; // Access the error message from action.payload
      state.isSuccess = false;
      state.user = null;
    });
  },
});

//export const { LOGIN, REGISTER } = authSlice.actions;

//export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
