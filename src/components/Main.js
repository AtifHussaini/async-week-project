import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import AllStudents from './AllStudents';
import AllCampuses from "./AllCampuses";
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Welcome from "./Welcome";

const Main = () => {

    return (
        <div id="main">
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/students'>Students</Link>
                <Link to='/campuses'>Campuses</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Welcome />}/>
                <Route path='/students' element={<AllStudents />} />
                <Route path='/campuses' element={<AllCampuses />} />
                <Route path='/campuses/:id' element={<SingleCampus />} />
                <Route path='/students/:id' element={<SingleStudent />} /> 
            </Routes>
        </div>
    );
};

export default Main;

// QUESTIONS & COMMENTS!
// 