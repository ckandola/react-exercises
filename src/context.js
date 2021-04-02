import React, { useState, useContext } from 'react';
import {default as smenulinks} from './components/StripeMenu/data';

const AppContext = React.createContext();
    // gives both Provider and Consumer

const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // StripeMenu ---

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links:[]});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    
    const openSubmenu = (text, coordinates) => {
        setPage(smenulinks.find(x => x.page === text));
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    // StripeMenu ---

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return (
        <AppContext.Provider value={{
            isModalOpen, openModal, closeModal,
            
            isSidebarOpen, openSidebar, closeSidebar,
            isSubmenuOpen, openSubmenu, closeSubmenu,
            location, page
        }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider};
