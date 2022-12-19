import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import AllStudents from './AllStudents';
import AllCampuses from "./AllCampuses";
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Welcome from "./Welcome";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";

const Main = () => {

    return (
        <div id="main">
            <Navbar />
            <Routes>
                <Route path='/' element={<Welcome />}/>
                <Route path='/students' element={<AllStudents />} />
                <Route path='/campuses' element={<AllCampuses />} />
                <Route path='/campuses/:id' element={<SingleCampus />} />
                <Route path='/students/:id' element={<SingleStudent />} /> 
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default Main;