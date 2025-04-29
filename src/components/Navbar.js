import React, { useState } from 'react';
import './../assets/styles/Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
            <div className="logo">
                <a href="/">MyPortfolio</a>
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/#skills">Skills</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
            </ul>
            <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
