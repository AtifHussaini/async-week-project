import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleCampus, fetchSingleCampusAsync, deleteCampusAsycn, updateCampusAsync } from './campusSlice';
import { useParams, Link } from "react-router-dom";

const SingleCampus = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    
    const campus = useSelector(selectSingleCampus)
    const { students, name, address, image, description } = campus

    const [newName, setNewName] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newImage, setNewImage] = useState("")

    useEffect(() => {
        dispatch(fetchSingleCampusAsync(id))
    }, [])

    const handleDelete = async (e) => {
        const id = e.target.value
        dispatch(deleteCampusAsycn(id))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        dispatch(updateCampusAsync({ id, newName, newAddress, newDescription, newImage}))
    }

    const handleClick = () => {
        console.log("button clicked")
    }

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h3>{address}</h3>
                <p> {description} </p>
                <img src={image} style={{width: 200, height:200}} />
                <br></br>
                <Link to="/campuses"><button value={campus.id} onClick={handleDelete}>DELETE</button></Link>
            </div>
            <h1>UPDATE CAMPUS</h1>
            <form method="post" action={`/campuses/${id}`} onSubmit={handleSubmit}>
                <input value={newName} placeholder={name} onChange={(e) => setNewName(e.target.value)}></input>
                <br></br>
                <input value={newAddress} placeholder={address} onChange={(e) => setNewAddress(e.target.value)}></input>
                <br></br>
                <input value={newDescription} placeholder={description} onChange={(e) => setNewDescription(e.target.value)}></input>
                <br></br>
                <input value={newImage} maxLength="1000000" placeholder={image} onChange={(e) => setNewImage(e.target.value)}></input>
                <br></br>
                <button type="submit" onClick={handleClick}>Update</button>
            </form>
            <h2>Enrolled:</h2>
            {students && students.length ? ( 
                students.map(student => {
                return <div key={student.id}>
                            <h3><Link to={`/students/${student.id}`} key={student.id}> {student.firstName} {student.lastName}</Link></h3>
                        </div>})) : (<h3>{name} does not have any enrolled students at the moment!</h3>)
            }
        </div>
        );
}

export default SingleCampus;