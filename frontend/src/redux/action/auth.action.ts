import { instance } from "../../apis/api.instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk("register", async (user) => {
  const res = await instance.post("/user/register", user);
  console.log("hello", res.data);
  return res.data;
});

/* export const register = createAsyncThunk(
  "register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await instance.post("/user/register", user);
      return res.data;
    } catch (error) {
      // @ts-ignore
      // Handle and return the error message and status code
      return rejectWithValue(error.response.data);
    }
  }
); */
export const login = createAsyncThunk("login", async (userLog) => {
  const res = await instance.post("/user/login", userLog);
  localStorage.setItem("userInfo", JSON.stringify(userLog));
  return res.data;
});

export const logout = createAsyncThunk("logout", async () => {
  try {
    await localStorage.removeItem("userInfo");
  } catch (error) {
    // Handle any errors that might occur during localStorage removal
    console.error("Error removing user info from localStorage:", error);
  }
});
