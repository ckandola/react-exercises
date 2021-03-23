import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
    // gives both Provider and Consumer

const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // StripeMenu ---

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    
    const openSubmenu = () => {
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
            isSubmenuOpen, openSubmenu, closeSubmenu
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
