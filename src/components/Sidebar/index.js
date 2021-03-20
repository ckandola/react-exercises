import React from 'react';
import './Sidebar.css';
import {FaBars} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <main className="sidebar-main">
            <button className="sidebar-toggle">
                <FaBars />
            </button>
        </main>
    );
};

export default Sidebar;
