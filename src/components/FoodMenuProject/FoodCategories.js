import React from 'react';
import PropTypes from 'prop-types';

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

FoodCategories.propTypes = {
    categoryList: PropTypes.arrayOf(PropTypes.string),
    filterItems: PropTypes.func
};
