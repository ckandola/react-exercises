import React from 'react';
import { FaTimes } from 'react-icons/fa'
import sublinks from './data';
import { useGlobalContext } from './index';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={`smenu-sidebar-wrapper ${isSidebarOpen && 'show'}`}>
            <div className="smenu-sidebar">
                <button
                    className="smenu-close-btn"
                    onClick={closeSidebar}>
                        <FaTimes />
                </button>
                <div className="smenu-sidebar-links">
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="smenu-sidebar-sublinks">
                                    {links.map((link, index2) => {
                                        return <a key={index2} href={link.url}>
                                            {link.icon}
                                            {link.label}
                                        </a>
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
