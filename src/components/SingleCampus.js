import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleCampus, fetchSingleCampusAsync, deleteCampusAsycn } from './campusSlice';
import { useParams, Link } from "react-router-dom";

const SingleCampus = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    
    const campus = useSelector(selectSingleCampus)
    const { students, name, address, image, description } = campus

    useEffect(() => {
       
        dispatch(fetchSingleCampusAsync(id))

    }, [])

    const handleDelete = async (e) => {
        const id = e.target.value
        dispatch(deleteCampusAsycn(id))
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