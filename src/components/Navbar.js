import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav>
            <Link to='/students'>Students</Link>
            <Link to='/campuses'>Campuses</Link>
            <Link to='/'>Home</Link>
        </nav>
    );
}

export default Navbar;