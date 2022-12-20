import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllPlayersAsync = createAsyncThunk("players-fetchAll", async () => {
    try {
        const { data } = await axios.get('/api/players')
        return data
    } catch (err) {
        console.log(err)
    }
})

export const allPlayersSlice = createSlice({
    
    name: "allPlayers",
    initialState: [],
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllPlayersAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllPlayers = (state) => state.allPlayers

export default allPlayersSlice.reducer
