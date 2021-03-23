// from https://youtu.be/a_7Z7C_JCyo?t=20834

import React from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import './StripeMenu.css';
import { useGlobalContext } from '../../context';

const StripeMenu = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </div>
    );
};

export default StripeMenu;
export {useGlobalContext};
