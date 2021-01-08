import React from 'react';
import './index.css';

const FoodCategories = ({categoryList, filterItems}) => {

    return (
        <div className="btn-container">
            {categoryList.map(category => {
                return (
                    <button key={category} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
                );
            })}
        </div>
    );
};

export default FoodCategories;
