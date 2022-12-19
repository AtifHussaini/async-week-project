import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav>
            <Link style={{padding: 10}} to='/'>Home</Link>
            <Link style={{padding: 10}} to='/students'>Students</Link>
            <Link style={{padding: 10}} to='/campuses'>Campuses</Link>
        </nav>
    );
};

export default Navbar;