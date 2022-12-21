import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomPlayersAsync = createAsyncThunk(
  "players-fetchRandom1",
  async () => {
    try {
      const { data } = await axios.get("/api/players");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const randomPlayersSlice1 = createSlice({
  name: "Players1",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRandomPlayersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectRandomPlayers1 = (state) => state.randomPlayers1;

export default randomPlayersSlice1.reducer;
