import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleCampus, fetchSingleCampusAsync, deleteCampusAsync, updateCampusAsync } from './campusSlice';
import { useParams, Link } from "react-router-dom";

const SingleCampus = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    const campus = useSelector(selectSingleCampus);
    const { students, name, address, image, description } = campus;

    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newImage, setNewImage] = useState("");

    useEffect(() => {
        dispatch(fetchSingleCampusAsync(id))
    }, [dispatch]);

    const handleDelete = async (e) => {
        const id = e.target.value;
        dispatch(deleteCampusAsync(id));
    }

    const handleSubmit = async () => {
        dispatch(updateCampusAsync({ id, newName, newAddress, newDescription, newImage}));
    };

    const handleClick = () => {
        console.log("button clicked");
    };

    const handleUnregister = async (e) => {
        const studentId = e.target.value;
        await axios.put(`/api/students/${studentId}`);
        window.location.reload(true);
    };

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
                <input required style={{width:350}} value={newName} placeholder={name} onChange={(e) => setNewName(e.target.value)}></input>
                <br></br>
                <input required style={{width:350}} value={newAddress} placeholder={address} onChange={(e) => setNewAddress(e.target.value)}></input>
                <br></br>
                <textarea style={{width: 350, height: 150, resize: 'none'}} required value={newDescription} placeholder={description} onChange={(e) => setNewDescription(e.target.value)}></textarea>
                <br></br>
                <input required style={{width:350}} value={newImage} placeholder={image} onChange={(e) => setNewImage(e.target.value)}></input>
                <br></br>
                <button type="submit" onClick={handleClick}>Update</button>
            </form>
            <h2>Enrolled:</h2>
            {students && students.length ? ( 
                students.map(student => {
                return <div key={student.id}>
                            <h3><Link to={`/students/${student.id}`} key={student.id}> {student.firstName} {student.lastName}</Link></h3>
                            <button value={student.id} onClick={handleUnregister}>Unregister</button>
                        </div>
                })) : (<h3>{name} does not have any enrolled students at the moment!</h3>)
            };
        </div>
        );
}

export default SingleCampus;