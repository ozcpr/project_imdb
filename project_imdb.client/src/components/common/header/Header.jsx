import React from 'react';
import { Link } from 'react-router-dom';
import imdb_logo from '../../../assets/imdb_logo.svg';
import Navbar from './Navbar';
import '../../../styles/header.scss'
import Search from './Search';
import Account from './Account';
import ButtonComponent from '../Button';

 

const Header = () => {
    return (
        <nav className="header">
            <div className="container">
                <Link to="/" className="header-item">
                    <img src={imdb_logo} alt="Movie Database Logo" className="imdb_logo" />
                </Link>
                <Navbar />
                <div className="right-part">
                    <Search />
                    <ButtonComponent label="My Collection" />
                    <Account />
                </div>  

            </div>
        </nav>
    );
};

export default Header;