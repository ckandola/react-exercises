import React from 'react';
import { useGlobalContext } from './index';
import PropTypes from 'prop-types';

const CartItem = ({id, img, title, price, amount}) => {
    const { removeCartItem, increaseCartAmt, decreaseCartAmt } = useGlobalContext();
    return (
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="cart-item-price">
                    ${price}
                </h4>
                <button 
                    className="cart-remove-btn"
                    onClick={() => removeCartItem(id)}>
                    Remove
                </button>
            </div>
            <div>
                <button 
                    className="cart-amount-btn"
                    onClick={() => increaseCartAmt(id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                <p className="cart-amount">{amount}</p>
                <button 
                    className="cart-amount-btn"
                    onClick={() => decreaseCartAmt(id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </article>
    );
};

export default CartItem;

// id and price from the tutorial link will be strings; data.js has them as numbers.

CartItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    amount: PropTypes.number
};
