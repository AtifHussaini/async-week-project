import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllStudentsAsync = createAsyncThunk("students-fetchAll", async () => {
    try {
        const { data } = await axios.get('/api/students');
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const createStudentAsync = createAsyncThunk("student-create", async ({firstName, lastName, email, gpa, option}) => {
    
    try {
        const { data } = await axios.post('/api/students', {
            firstName,
            lastName,
            email,
            gpa,
            campusId: option
        });
        return data;
    } catch (err) {
        console.log(err);
    }

})

export const allStudentsSlice = createSlice({

    name: "allStudents",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllStudentsAsync.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(createStudentAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectAllStudents = (state) => state.allStudents;

export default allStudentsSlice.reducer;