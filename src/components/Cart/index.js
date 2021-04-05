// from https://youtu.be/a_7Z7C_JCyo?t=24176

import React from 'react';
import { useGlobalContext } from '../../context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import './Cart.css';

const Cart = () => {
    const { cartLoading } = useGlobalContext();
    if (cartLoading) {
        return (
            <div className="cart-loading">
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
};

export { useGlobalContext };
export default Cart;
