import { createSlice } from "@reduxjs/toolkit";

export const scoresSlice = createSlice({
  name: "score",
  initialState: { score1: 0, score2: 0 },
  reducers: {
    updateScore1: (state, action) => (state.score1 = action.payload),
    updateScore2: (state, action) => (state.score2 = action.payload),
  },
});

export const selectScore1 = (state) => state.scores.score1;
export const selectScore2 = (state) => state.scores.score2;

export default scoresSlice.reducer;
