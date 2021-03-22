import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
    // gives both Provider and Consumer

const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return (
        <AppContext.Provider value={{
            isModalOpen, openModal, closeModal
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
