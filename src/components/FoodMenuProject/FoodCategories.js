import React from 'react';

const FoodCategories = ({categoryList, filterItems}) => {

    return (
        <div className="food-btn-container">
            {categoryList.map(category => {
                return (
                    <button key={category} className="food-filter-btn" onClick={() => filterItems(category)}>{category}</button>
                );
            })}
        </div>
    );
};

export default FoodCategories;
