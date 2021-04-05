import React, { useState, useContext, useReducer, useEffect } from 'react';
import {default as smenulinks} from './components/StripeMenu/data';

import cartItems from './components/Cart/data';
import {default as cartReducer} from './components/Cart/reducer';

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

    // Cart ---
    const cartUrl = 'https://course-api.com/react-useReducer-cart-project';
    const initialCartState = {
        cartLoading: false,
        cart: cartItems,
        cartTotal: 0,
        cartAmount: 0
    };
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
    const clearCart = () => {
        cartDispatch({type: 'CLEAR_CART'});
    };
    const removeCartItem = id => {
        cartDispatch({type: 'REMOVE_ITEM', payload: id});
    }
    const increaseCartAmt = id => {
        cartDispatch({type: 'INCREASE', payload: id});
    }
    const decreaseCartAmt = id => {
        cartDispatch({type: 'DECREASE', payload: id});
    }
    const fetchCartData = async () => {
        cartDispatch({type: 'LOADING'});
        const response = await fetch(cartUrl);
        const cart = await response.json();
        cartDispatch({type: 'DISPLAY_ITEMS', payload: cart});
    }

    useEffect(() => {
        cartDispatch({type: 'GET_TOTALS'});
    }, [cartState.cart]);

    useEffect(() => {
        fetchCartData();
    }, []);
    
    return (
        <AppContext.Provider value={{
            isModalOpen, openModal, closeModal,
            
            isSidebarOpen, openSidebar, closeSidebar,
            isSubmenuOpen, openSubmenu, closeSubmenu,
            location, page,

            ...cartState, clearCart, removeCartItem, 
            increaseCartAmt, decreaseCartAmt, fetchCartData
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