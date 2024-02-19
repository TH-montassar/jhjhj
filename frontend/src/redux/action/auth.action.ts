import { instance } from "../../apis/api.instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthToken } from "../../utils/setAuthToken";

export const register = createAsyncThunk(
  "register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await instance.post("/user/register", user);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (userLog, { rejectWithValue }) => {
    try {
      const res = await instance.post("/user/login", userLog);
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      setAuthToken(res.data.token);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const logout = createAsyncThunk("logout", async () => {
  try {
    await localStorage.removeItem("userInfo");
    await localStorage.removeItem("token");
  } catch (error: any) {
    // Handle any errors that might occur during localStorage removal
    console.error("Error removing user info from localStorage:", error);
  }
});

export const authCheck = createAsyncThunk(
  "authCheck",
  async (_, { rejectWithValue }) => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
    }
    try {
      const res = await instance.get("user/check");
      return res.data;
    } catch (error: any) {
      console.error("Error removing user info from localStorage:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
