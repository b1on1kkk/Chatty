import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { UsersInf } from "./get_users.slice";

interface User {
  user: UsersInf;
}

const initialState: User = {
  user: { id: 0, name: "", lastname: "", email: "", avatar: "", role: "" }
};

export const getUser = createAsyncThunk("User/getUser", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`http://localhost:2000/user`);

    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const User = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.data[0];
    });
  }
});
