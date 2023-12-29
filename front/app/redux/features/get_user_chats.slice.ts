import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { UsersInf } from "./get_user.slice";

interface TUsers {
  users: UsersInf[];
  status: "pending" | "fulfilled";
}

const initialState: TUsers = {
  users: [],
  status: "pending"
};

export const getUsers = createAsyncThunk(
  "Users/getUsers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:2000/users`);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Users = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.status = "fulfilled";
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.status = "pending";
    });
  }
});
