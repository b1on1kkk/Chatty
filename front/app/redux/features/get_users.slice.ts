import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UsersInf {
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
}

interface Users {
  user: UsersInf[];
  status: "pending" | "fulfilled";
}

const initialState: Users = {
  user: [],
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
      state.user = action.payload.data;
      state.status = "fulfilled";
    });
    builder.addCase(getUsers.pending, (state, _) => {
      state.status = "pending";
    });
  }
});
