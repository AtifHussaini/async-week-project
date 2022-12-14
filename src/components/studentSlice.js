import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleStudentAsync = createAsyncThunk("student/fetchOne", async (id) => {
    try {
        const { data } = await axios.get(`/api/students/${id}`)
        return data
    } catch (err) {
        console.log(err);
    }
})

export const singleStudentSlice = createSlice({

    name: "singleStudent",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchSingleStudentAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const selectSingleStudent = (state) => state.singleStudent

export default singleStudentSlice.reducer