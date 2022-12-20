import { configureStore } from "@reduxjs/toolkit";
import allPlayersReducer from "../components/playersSlice";

const store = configureStore({

  reducer: {
    allPlayers: allPlayersReducer
  }
});

export default store;