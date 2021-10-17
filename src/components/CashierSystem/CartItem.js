import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({index, itemNum, description, quantity, loadType, price, onClick/* , img */}) => {

    const handleClick = () => {
        onClick({
            index,
            itemNum,
            description,
            quantity,
            loadType,
            price
        });
    };

    return (
        <div className="pos-cart-item" onClick={handleClick}>
            <div>
                <p className="pos-cart-item-desc">{description}</p>
                <div style={{display: 'flex'}}>
                    <div className="pos-cart-item-img"></div>
                    <p className="pos-cart-item-num">{itemNum}</p>
                </div>
            </div>
            <div className="pos-cart-item-price">{price.toLocaleString(undefined, { minimumFractionDigits: 2})}</div>
            <div className="pos-cart-item-quantity">{quantity.toLocaleString(undefined)}</div>
            <div style={{display: 'grid', gridTemplateRows: 'auto auto', gridTemplateColumns: '100%'}}>
                <div className="pos-cart-item-total">${(quantity * price).toLocaleString(undefined, { minimumFractionDigits: 2})}</div>
                <div className="pos-cart-item-loadtype">{loadType}</div>
            </div>
        </div>
    );
}

export default CartItem;

CartItem.propTypes = {
    index: PropTypes.number,
    itemNum: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    loadType: PropTypes.string,
    price: PropTypes.number
};
