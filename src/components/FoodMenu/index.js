// from https://youtu.be/a_7Z7C_JCyo?t=5299

import React from 'react';
import './index.css';

const FoodMenu = ({items}) => {
    return (
        <div className="section-center">
            {items.map(item => {
                const {id, title, img, desc, price} = item;
                return <article key={id} className="menu-item">
                    <img src={img} alt={title} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price">${price}</h4>
                        </header>
                        <p className="item-text">{desc}</p>
                    </div>
                </article>
            })}
        </div>
    );
};

export default FoodMenu;
