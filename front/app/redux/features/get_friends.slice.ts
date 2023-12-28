import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface TFriend {
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  friend_id: number;
}

interface Friends {
  friends: TFriend[];
}

const initialState: Friends = {
  friends: []
};

export const getFriends = createAsyncThunk(
  "Friends/getFriends",
  async (user_id: number, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:2000/friends?user_id=${user_id}`
      );

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Friends = createSlice({
  name: "Friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.friends = action.payload.data;
    });
  }
});
