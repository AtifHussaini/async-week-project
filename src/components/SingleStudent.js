import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleStudent, fetchSingleStudentAsync } from './studentSlice'
import { useParams } from "react-router-dom"

const SingleStudent = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    const student = useSelector(selectSingleStudent)
    console.log(student)

    useEffect(() => {
       
       dispatch(fetchSingleStudentAsync(id))

    }, [])

    return (
        <div>
            <div>
                <h1>{student.firstName} - Attends</h1>
                <h3>{student.email}</h3>
                <h3>{student.gpa}</h3>
                <img src={student.image} style={{width: 200, height: 300}} />
            </div>
        </div>
    );
}

export default SingleStudent;

// Still have to add LINK to campuses!!