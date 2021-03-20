// from https://youtu.be/a_7Z7C_JCyo?t=16927

import React, {useState, useRef, useEffect} from 'react';
import './NavBar.css';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <div className="navbar-header">
                    <img src={logo} alt="logo"/>
                    <button className="navbar-toggle"
                            onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                
                <div className={`navbar-links-container ${showLinks && 'navbar-show-container'}`} 
                    ref={linksContainerRef}>
                    <ul className="navbar-links" ref={linksRef}>
                        {links.map(link => {
                            return (
                                <li key={link.id}>
                                    <a href={link.url}>
                                        {link.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                <ul className="navbar-social-icons">
                    {social.map(icon => {
                        return (
                            <li key={icon.id}>
                                <a href={icon.url}>
                                    {icon.icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
