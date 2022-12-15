import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleStudent, fetchSingleStudentAsync, deleteStudentAsync } from './studentSlice'
import { useParams, Link } from "react-router-dom"

const SingleStudent = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const student = useSelector(selectSingleStudent)
    const { firstName, lastName, email, gpa, image, campus } = student

    useEffect(() => {
       
       dispatch(fetchSingleStudentAsync(id))

    }, [])

    const handleDelete = async (e) => {
        const id = e.target.value
        dispatch(deleteStudentAsync(id))
    }

    return (
        <div>
            <div>
                <h1>{firstName} {lastName} - Attends {campus ? (<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>) : ("no particular campus!")} </h1>
                <h3>{email}</h3>
                <h3>{gpa}</h3>
                <img src={image} style={{width: 200, height: 300}} />
                <br></br>
                <button value={student.id} onClick={handleDelete}>DELETE</button>
            </div>
        </div>
    );
}

export default SingleStudent;