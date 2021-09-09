import React from 'react';
import {Link} from 'react-router-dom';
import './BasicMenu.css';

const BasicMenu = () => {
    return (
        <nav>
            <div className="basicmenu">
                <ul>
                    <li>
                        <Link to={`/BasicMenu/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/BasicMenu/About`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/BasicMenu/Resume`}>Resume</Link>
                    </li>
                    <li>
                        <Link to={`/BasicMenu/Contact`}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BasicMenu;
