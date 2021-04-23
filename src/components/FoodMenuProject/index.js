// from https://youtu.be/a_7Z7C_JCyo?t=5299

import React, {useState} from 'react';
import './FoodMenu.css';
import FoodMenu from './FoodMenu';
import FoodCategories from './FoodCategories';
import foodItems from './data';

const FoodMenuProject = () => {
    const [menuItems, setMenuItems] = useState(foodItems);
    const categoryList = ['all', ...new Set(foodItems.map(item => item.category))];

    const filterItems = category => {
        if (category === 'all') {
            setMenuItems(foodItems);
            return;
        }
        const newItems = foodItems.filter(item => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
          <section className="food-menu food-section">
            <div className="food-title">
              <h2>Our Menu</h2>
              <div className="food-underline"></div>
            </div>
            <FoodCategories filterItems={filterItems} categoryList={categoryList} />
            <FoodMenu items={menuItems}/>
          </section>
        </main>
    );
}

export default FoodMenuProject;
