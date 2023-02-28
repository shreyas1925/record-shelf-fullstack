import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const index = () => {
    return (
        <header>
            <Link to="/">
                <p>My <span>Record</span> Shelf</p>
            </Link> 
        </header>
    );
};

export default index;