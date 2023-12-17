import { instance } from "../../apis/api.instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk("register", async (user) => {
  const res = await instance.post("/user/register", user);
  return res.data;
});
export const login = createAsyncThunk("login", async (userLog) => {
  const res = await instance.post("/user/login", userLog);
  return res.data;
});
