import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleStudentAsync = createAsyncThunk("student/fetchOne", async (id) => {
    try {
        const { data } = await axios.get(`/api/students/${id}`);
        return data;
    } catch (err) {
        console.log(err);
    }
})

export const deleteStudentAsync = createAsyncThunk("student-delete", async (id) => {

    try {
        const { data } = await axios.delete(`/api/students/${id}`);
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const updateStudentAsync = createAsyncThunk("student-update", async ({id, newFirstName, newLastName, newEmail, newImage, newGpa, newOption}) => {
    try {
        const { data } = await axios.put(`/api/students/${id}`, {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            image: newImage,
            gpa: newGpa,
            campusId: newOption
        });
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const singleStudentSlice = createSlice({

    name: "singleStudent",
    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchSingleStudentAsync.fulfilled, (state, action) => {
            return action.payload
        })

        builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
            return action.payload
        })

        builder.addCase(updateStudentAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const selectSingleStudent = (state) => state.singleStudent;

export default singleStudentSlice.reducer;