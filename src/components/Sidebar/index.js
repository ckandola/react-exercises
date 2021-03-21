import React, {useState} from 'react';
import './Sidebar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { social, links } from './data';
import logo from './logo.svg';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <main className="sidebar-main">
                <button 
                    className="sidebar-toggle"
                    onClick={toggleSidebar}>
                    <FaBars />
                </button>
            </main>

            <aside className={`sidebar ${isOpen && 'show-sidebar'}`}>
                <div className="sidebar-header">
                    <img src={logo} className="sidebar-logo" alt="logo"/>
                    <button 
                        className="sidebar-close-btn"
                        onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="sidebar-links">
                    {links.map(link => {
                        return (
                            <li key={link.id}>
                                <a href={link.url}>{link.icon}{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <ul className="sidebar-social-icons">
                    {social.map(link => {
                        return (
                            <li key={link.id}>
                                <a href={link.url}>{link.icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
