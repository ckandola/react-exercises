import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
    // gives both Provider and Consumer

const AppProvider = ({children}) => {
    return (
    <AppContext.Provider value="hello">
        {children}
    </AppContext.Provider>
    );
};

export {AppContext, AppProvider};
