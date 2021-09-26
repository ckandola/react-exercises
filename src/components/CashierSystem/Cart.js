import React from 'react';
import { FaCashRegister } from 'react-icons/fa';
import { useGlobalContext } from './index';

const Cart = () => {
    const { posCartState } = useGlobalContext();

    return (
        <section className="pos-cart">
            {posCartState.map((item, index) => {
                return (
                    <div key={index}>{item.id}</div>
                )
            })}
            <FaCashRegister className="pos-cart-icon" />
        </section>
    );
};

export default Cart;
