import { configureStore } from "@reduxjs/toolkit";
import allCampusesReducer from "../components/allCampusesSlice";
import allStudentsReducer from "../components/allStudentsSlice";
import singleCampusReducer from "../components/campusSlice";
import singleStudentReducer from "../components/studentSlice";


const store = configureStore({

  reducer: {
    allStudents: allStudentsReducer,
    allCampuses: allCampusesReducer,
    singleCampus: singleCampusReducer,
    singleStudent: singleStudentReducer
  }
});

export default store;