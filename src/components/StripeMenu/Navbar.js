import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './index';

const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="stripe" className="nav-logo"/>
                    <button 
                        className="smenu-btn smenu-toggle-btn"
                        onClick={openSidebar}>
                        <FaBars/>
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="smenu-link-btn">
                            products
                        </button>
                    </li>
                            
                    <li>
                        <button className="smenu-link-btn">
                            developers
                        </button>
                    </li>
                        
                    <li>
                        <button className="smenu-link-btn">
                            company
                        </button>
                    </li>
                </ul>
                <button className="smenu-btn smenu-signin-btn">
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
