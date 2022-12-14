import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Routes, Route, Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux';
import { createStudentAsync, deleteStudentAsync, fetchAllStudentsAsync, selectAllStudents } from './allStudentsSlice';
import { fetchAllCampusesAsync, selectAllCampuses } from './allCampusesSlice';

const AllStudents = () => {

    const dispatch = useDispatch()
    const students = useSelector(selectAllStudents)
    const campuses = useSelector(selectAllCampuses)
    console.log(students)

    useEffect(() => {

        dispatch(fetchAllStudentsAsync())
        dispatch(fetchAllCampusesAsync())

    }, [])

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [gpa, setGpa] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createStudentAsync({firstName, lastName, email, gpa}))
    }

    const handleClick = () => {
        console.log("Create student - clicked")
    }

    // const handleDelete = async (e) => {

    //     // const id = e.target.value

    //     // dispatch(deleteStudentAsync({id}))

        // try {
        //     const id = e.target.value
        //     console.log(id)
        //     const omit = await axios.delete('/api/students', {id})
        //     return omit
        // } catch (err) {
        //     console.log(err)
        // }

    // }

    return (
        <div>
            <p>Students: {students.length}</p> 
            <p>Campuses: {campuses.length}</p>
           {students.map(student => {
            return (
                <div key={student.id}>
                    <h1>{student.firstName} {student.lastName} attends {campuses[student.campusId - 1].name}</h1>
                    <h3>Email: {student.email}</h3>
                    <h3>GPA: {student.gpa}</h3>
                    <Link to={`/students/${student.id}`}><img src={student.image} style={{width: 200, height: 300}} /></Link>
                    <br></br>
                    {/* <button value={student.id} onClick={handleDelete}>DELETE</button> */}
                </div>
                )
           })}
           <div>
            <form method="post" action="/students" onSubmit={handleSubmit}>
                <h1>ENTER IN A NEW STUDENT</h1>
                <input name="firstName" type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <input name="lastName" type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <input name="email" type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input name="gpa" type="number" placeholder='GPA' value={gpa} onChange={(e) => setGpa(e.target.value)}></input>
                <select>
                    {campuses.map(campus => {
                        return <option key={campus.id}>{campus.name}</option>
                    })}
                </select>
                <button type="submit" onClick={handleClick}>Create</button>
            </form>
           </div>
        </div>
    );
}

export default AllStudents;

// 1. Need to be able to add campusId to a new student!!
// 2. Fix GPA field to only accept values from 0-4, 2 digits max.
// 3. Look at video to only render when a change is made
// 4. Once you add a campus, page refreshes? Although preventDefault is applied