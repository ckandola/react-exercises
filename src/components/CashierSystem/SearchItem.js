import React from 'react';

const SearchItem = ({itemNum, description, price, onClick}) => {
    const handleClick = () => {
        onClick();
        return;
    }

    return (
        <div className="pos-search-item" onClick={handleClick}>
            <div className="pos-search-item-price">${price}</div>
            <div className="pos-search-item-desc">{description}</div>
            <div className="pos-search-item-num">{itemNum}</div>
        </div>
    );
}

export default SearchItem;
