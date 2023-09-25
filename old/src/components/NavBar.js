import React from 'react';
import { Link } from 'gatsby';
import '../css/navbar.css'; 

const NavBar = () => {
    return (
        <nav className="nav-container">
            <h1 className="title">NHS Matcher<p>Powered by Stratonauts Dog API</p></h1>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/filter" className="nav-link">Filter</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
