import React, { useState } from 'react';
import './css/NavbarStyle.css';  // We'll define styles in this file
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>SPT</h2>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <Link to="/menu">Home</Link>
                {/* <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a> */}
            </div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;
