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

export const deleteCampusAsync = createAsyncThunk("campus/delete", async (id) => {
    try {
        const { data } = await axios.delete(`/api/campuses/${id}`);
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const updateCampusAsync = createAsyncThunk("campus/update", async ({ id, newName, newAddress, newDescription, newImage}) => {
    try {
        const { data } = await axios.put(`/api/campuses/${id}`, {
            name: newName,
            address: newAddress,
            description: newDescription,
            image: newImage
        })
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const singleCampusSlice = createSlice({

    name: "singleCampus",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        })

        builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        })

        builder.addCase(updateCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectSingleCampus = (state) => state.singleCampus;

export default singleCampusSlice.reducer;