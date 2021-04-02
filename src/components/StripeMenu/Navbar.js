import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './index';

const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
    const displaySubmenu = e => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        console.log(tempBtn);
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom; // hang 275px below
        openSubmenu(page, {center, bottom});
    }

    const handleSubmenu = e => {
        if (!e.target.classList.contains('smenu-link-btn')) {
            closeSubmenu();
        }
    }
    
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
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
                        <button 
                            className="smenu-link-btn" 
                            onMouseOver={displaySubmenu} >
                            products
                        </button>
                    </li>
                            
                    <li>
                        <button 
                            className="smenu-link-btn" 
                            onMouseOver={displaySubmenu} >
                            developers
                        </button>
                    </li>
                        
                    <li>
                        <button 
                            className="smenu-link-btn" 
                            onMouseOver={displaySubmenu}>
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
