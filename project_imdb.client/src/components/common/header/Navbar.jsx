import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-links">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/movies" className="navbar-item">Movies</Link>
                    <Link to="/tv-shows" className="navbar-item">TV Shows</Link>
                    <Link to="/genres" className="navbar-item">Genres</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;