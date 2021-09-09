import React from 'react';
import PropTypes from 'prop-types';

const FoodMenu = ({items}) => {
    return (
        <div className="food-section-center">
            {items.map(item => {
                const {id, title, img, desc, price} = item;
                return <article key={id} className="food-menu-item">
                    <img src={img} alt={title} className="food-photo" />
                    <div className="food-item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className="food-price">${price}</h4>
                        </header>
                        <p className="food-item-text">{desc}</p>
                    </div>
                </article>
            })}
        </div>
    );
};

export default FoodMenu;

FoodMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape)
};
