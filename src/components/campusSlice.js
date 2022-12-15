import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleCampusAsync = createAsyncThunk("campus/fetchOne", async (id) => {
    try {
        const { data } = await axios.get(`/api/campuses/${id}`)
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const deleteCampusAsycn = createAsyncThunk("campus/delete", async (id) => {
    try {
        const { data } = await axios.delete(`/api/campuses/${id}`)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const singleCampusSlice = createSlice({

    name: "singleCampus",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampusAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const selectSingleCampus = (state) => state.singleCampus

export default singleCampusSlice.reducer