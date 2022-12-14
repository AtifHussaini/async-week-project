import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleCampus, fetchSingleCampusAsync } from './campusSlice';
import { useParams } from "react-router-dom";

const SingleCampus = () => {

    const { id } = useParams()

    const dispatch = useDispatch()
    
    const campus = useSelector(selectSingleCampus)
    console.log(campus)


    useEffect(() => {
       
        dispatch(fetchSingleCampusAsync(id))

    }, [])

    return (
        <div>
            <div>
                <h1>Detail Page for {campus.name}</h1>
                <h3>{campus.address}</h3>
                <p>{campus.description}</p>
                <img src={campus.image} style={{width: 200, height:200}} />
                <ul>Enrollees:</ul>
                    {/* <li>{campus.students[0].firstName}</li> */}
            </div>
        </div>
    );
}

export default SingleCampus;

//Unable to get students for each individual university to render. Then provide Links to them.