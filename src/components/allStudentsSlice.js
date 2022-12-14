import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Student } from "../../server/db";

export const fetchAllStudentsAsync = createAsyncThunk("students-fetchAll", async () => {
    try {
        const { data } = await axios.get('/api/students')
        return data
    } catch (err) {
        console.log(err)
    }
})

export const createStudentAsync = createAsyncThunk("student-create", async ({firstName, lastName, email, gpa}) => {
    
    try {
        const { data } = await axios.post('/api/students', {
            firstName,
            lastName,
            email,
            gpa
        })
        return data;
    } catch (err) {
        console.log(err)
    }

})

export const deleteStudentAsync = createAsyncThunk("student-delete", async ({id}) => {

    try {
        const { data } = await axios.delete('/api/students', {id})
        return data
    } catch (err) {
        console.log(err)
    }
})

export const allStudentsSlice = createSlice({

    name: "allStudents",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllStudentsAsync.fulfilled, (state, action) => {
            return action.payload
        });

        builder.addCase(createStudentAsync.fulfilled, (state, action) => {
            return action.payload
        });
    }
});

export const selectAllStudents = (state) => state.allStudents

export default allStudentsSlice.reducer

// 1. What if we did not add the extraReducer/addCase functionality?