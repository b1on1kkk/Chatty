import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TSessionStatus {
  session: {
    status: 200 | undefined;
    message: string | undefined;
  };
  status: "pending" | "fulfilled";
}

const initialState: TSessionStatus = {
  session: {
    status: undefined,
    message: undefined
  },
  status: "pending"
};

export const getSessionStatus = createAsyncThunk(
  "SessionStatus/getSessionStatus",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:2000/session_status`);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const SessionStatus = createSlice({
  name: "SessionStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSessionStatus.fulfilled, (state, action) => {
      state.session.message = action.payload.data.message;
      state.session.status = action.payload.data.status;
      state.status = "fulfilled";
    });
    builder.addCase(getSessionStatus.pending, (state, _) => {
      state.status = "pending";
    });
  }
});
