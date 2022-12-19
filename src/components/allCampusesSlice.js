import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllCampusesAsync = createAsyncThunk("campuses-fetchAll", async () => {
    try {
        const { data } = await axios.get('/api/campuses');
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const createCampusAsync = createAsyncThunk("campus-create", async ({name, address}) => {

    try {
        const { data } = await axios.post('/api/campuses', {
            name,
            address
        });
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const allCampusesSlice = createSlice({

    name: "allCampuses",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllCampusesAsync.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(createCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectAllCampuses = (state) => state.allCampuses;

export default allCampusesSlice.reducer;