import React from 'react';
import { FaCashRegister } from 'react-icons/fa';
import CartItem from './CartItem';
import { useGlobalContext } from './index';

const Cart = () => {
    const { posCartState, setPOSCurrentItem } = useGlobalContext();

    const editItem = item => {
        setPOSCurrentItem(item);
    }

    return (
        <section className="pos-cart">
            {posCartState.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        index={index}
                        itemNum={item.itemNum}
                        quantity={item.quantity}
                        description={item.description}
                        loadType={item.loadType}
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
