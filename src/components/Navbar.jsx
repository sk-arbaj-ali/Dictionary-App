import React from 'react';
import '../styles/Navbar.css';
import dictIcon from '../assets/icons8-dictionary-64.png';

const Navbar = () =>{
    return (
        <div className="navbar">
            <img src={dictIcon} alt="Dictionary Icon" />
            <p>Dictionary at your service</p>
        </div>
    );
};

export default Navbar;