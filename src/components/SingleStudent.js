import React, { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleStudent, fetchSingleStudentAsync, deleteStudentAsync, updateStudentAsync } from './studentSlice'
import { useParams, Link } from "react-router-dom"
import { fetchAllCampusesAsync, selectAllCampuses } from './allCampusesSlice';

const SingleStudent = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const student = useSelector(selectSingleStudent)
    const campuses = useSelector(selectAllCampuses)

    const { firstName, lastName, email, gpa, image, campus } = student

    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newImage, setNewImage] = useState("")
    const [newGpa, setNewGpa] = useState("")
    const [newOption, setNewOption] = useState("")

    useEffect(() => {
       
       dispatch(fetchSingleStudentAsync(id))
       dispatch(fetchAllCampusesAsync())

    }, [dispatch])

    const handleDelete = async () => {
        
        dispatch(deleteStudentAsync(id))
    }

    const handleSubmit = async () => {
        // e.preventDefault()
        console.log(newOption)
        dispatch(updateStudentAsync({id, newFirstName, newLastName, newEmail, newImage, newGpa, newOption}))

    }

    const handleClick = () => {
        console.log("update button clicked")
    }

    return (
        <div>
            <div>
                <h1>{firstName} {lastName} - Attends {campus ? (<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>) : ("no particular campus!")} </h1>
                <h3>{email}</h3>
                <h3>{gpa}</h3>
                <img src={image} style={{width: 200, height: 300}} />
                <br></br>
                <Link to="/students"><button value={student.id} onClick={handleDelete}>DELETE</button></Link>
            </div>
            <h1>UPDATE STUDENT</h1>
            <form method="update" action={`/students/${id}`} onSubmit={handleSubmit}>
                <input style={{width: 250}} required value={newFirstName} placeholder={firstName} onChange={(e) => setNewFirstName(e.target.value)}></input>
                <br></br>
                <input style={{width: 250}} required value={newLastName} placeholder={lastName} onChange={(e) => setNewLastName(e.target.value)}></input>
                <br></br>
                <input style={{width: 250}} required value={newEmail} placeholder={email} onChange={(e) => setNewEmail(e.target.value)}></input>
                <br></br>
                <input style={{width: 250}} required value={newImage} placeholder={image} onChange={(e) => setNewImage(e.target.value)}></input>
                <br></br>
                <input style={{width: 250}} required value={newGpa} placeholder={gpa} onChange={(e) => setNewGpa(e.target.value)}></input>
                <br></br>
                <select onChange={(e) => setNewOption(e.target.value)}>
                    <option value="">Choose Here</option>
                    {campuses.map(campus => {
                        return <option key={campus.id} value={campus.id}>{campus.name}</option>
                    })} 
                </select>
                <button type="submit" onClick={handleClick}>Update</button>
            </form>
        </div>
    );
}

export default SingleStudent;