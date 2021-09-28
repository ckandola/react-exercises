import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({itemNum, description, quantity, loadType, price, onClick/* , img */}) => {
    return (
        <div className="pos-cart-item" onClick={onClick}>
            <div>
                <p className="pos-cart-item-desc">{description}</p>
                <div style={{display: 'flex'}}>
                    <div className="pos-cart-item-img"></div>
                    <p className="pos-cart-item-num">{itemNum}</p>
                </div>
            </div>
            <div className="pos-cart-item-price">{price}</div>
            <div className="pos-cart-item-quantity">{quantity}</div>
            <div style={{display: 'grid', gridTemplateRows: 'auto auto'}}>
                <div className="pos-cart-item-total">${quantity * price}</div>
                <div className="pos-cart-item-loadtype">{loadType}</div>
            </div>
        </div>
    );
}

export default CartItem;

CartItem.propTypes = {
    itemNum: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
    loadType: PropTypes.string,
    price: PropTypes.number
};
