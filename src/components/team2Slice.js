import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomPlayers2Async = createAsyncThunk("players-fetchRandom2", async () => {
    try {
        const { data } = await axios.get('/api/players')
        return data
    } catch (err) {
        console.log(err)
    }
})

export const randomPlayersSlice2 = createSlice({

    name: "Players2",
    initialState: [],
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchRandomPlayers2Async.fulfilled, (state, action) => {
            return action.payload
        }) 
    }
});

export const selectRandomPlayers2 = (state) => state.randomPlayers2

export default randomPlayersSlice2.reducer
