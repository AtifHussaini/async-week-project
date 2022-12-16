import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Routes, Route, Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudentsAsync, selectAllStudents } from './allStudentsSlice';
import { createCampusAsync, fetchAllCampusesAsync, selectAllCampuses } from './allCampusesSlice';

const AllCampuses = () => {

    const dispatch = useDispatch()
    const students = useSelector(selectAllStudents)
    const campuses = useSelector(selectAllCampuses)
    console.log(campuses)

    useEffect(() => {

        dispatch(fetchAllStudentsAsync())
        dispatch(fetchAllCampusesAsync())

    }, [])

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = () => {
        dispatch(createCampusAsync({name, address}))
    }

    const handleClick = () =>{
        console.log("Create campus - clicked")
    }

    return (
        <div>
            <p>Students: {students.length}</p> 
            <p>Campuses: {campuses.length}</p>
            {campuses.map(campus => {
                    return (
                        <div key={campus.id}>
                            <h1><Link to={`/campuses/${campus.id}`}>{campus.name}</Link> ({campus.students.length} Enrollments)</h1>
                            <h3>{campus.address}</h3>
                            <p>{campus.description}</p>
                            <img src={campus.image} style={{width:200, height:200}} />
                        </div>
                    )
            })}
            <div>
            <form method="post" action="/campuses" onSubmit={handleSubmit}>
                <h1>ENTER IN A NEW CAMPUS</h1>
                <input required style={{width:200}} name="name" type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input required style={{width:200}} name="address" type="text" placeholder='City, State/Country' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <button type="submit" onClick={handleClick}>Create</button>
            </form>
           </div>
        </div>
    );
}

export default AllCampuses;