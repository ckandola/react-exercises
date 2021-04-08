import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = () => {
    return (
        <nav className="cocktail-navbar">
            <div className="cocktail-nav-center">
                <Link to="/Cocktail">
                    <img src={logo} alt="cocktail logo" className="cocktail-logo"/>
                </Link>

                <ul className="cocktail-nav-links">
                    <li>
                        <Link to="/Cocktail">Home</Link>
                    </li>
                    <li>
                        <Link to="/cocktail_about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
