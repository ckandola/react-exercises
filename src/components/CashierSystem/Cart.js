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
            <FaCashRegister className="pos-cart-icon" />
            <div className="pos-cart-cart-items">
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
            </div>
            <div className="pos-cart-subtotal">
                Subtotal: ${(posCartState.reduce((accum, currentItem) => {
                    accum += Number(currentItem.price) * currentItem.quantity;
                    return accum;
                }, 0)).toLocaleString(undefined, { minimumFractionDigits: 2})}
            </div>
        </section>
    );
};

export default Cart;
