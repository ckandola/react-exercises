import React from 'react';
import { FaCashRegister } from 'react-icons/fa';
import CartItem from './CartItem';
import { useGlobalContext } from './index';

const Cart = () => {
    const { posCartState } = useGlobalContext();

    const editItem = () => {
        console.log("I want to edit this item.")
    }

    return (
        <section className="pos-cart">
            {posCartState.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        itemNum={item.itemNum}
                        quantity={item.amount}
                        description={item.description}
                        loadType={item.load}
                        price={item.price}
                        onClick={editItem}
                    />
                )
            })}
            <FaCashRegister className="pos-cart-icon" />
        </section>
    );
};

export default Cart;
