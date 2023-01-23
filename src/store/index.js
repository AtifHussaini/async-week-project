import { configureStore } from "@reduxjs/toolkit";
import randomPlayersReducer1 from "../components/team1Slice";
import randomPlayersReducer2 from "../components/team2Slice";
import scoresReducer from "../components/scoreSlice";
import allPlayersReducer from "../components/allPlayersSlice";

const store = configureStore({
  reducer: {
    allPlayers: allPlayersReducer,
    randomPlayers1: randomPlayersReducer1,
    randomPlayers2: randomPlayersReducer2,
    scores: scoresReducer,
  },
});

export default store;

/*
STORE:
  team1Slice      team2Slice      scoresSlice
  randomPlayers1  randomPlayers2  scores
                                  score0, score1

*/