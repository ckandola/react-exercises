// from https://youtu.be/a_7Z7C_JCyo?t=5299

import React from 'react';
import './index.css';

const FoodMenu = ({items}) => {
    return (
        <div className="section-center">
            {items.map(item => {
                const {id, title, img, desc} = item;
                return <article key={id} className="menu-item">
                    <img src={img} alt={title} className="photo" />
                </article>
            })}
        </div>
    );
};

export default FoodMenu;
