import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const GroceryList = ({items, removeItem, editItem}) => {
    return (
        <div className="gList-grocery-list">
            {items.map(item => {
                const {id, title} = item;
                return (
                    <article className="gList-grocery-item" key={id}>
                        <p className="gList-title">{title}</p>
                        <div className="gList-btn-container">
                            <button className="gList-edit-btn"
                                    onClick={() => editItem(id)}>
                                <FaEdit />
                            </button>
                            <button className="gList-delete-btn"
                                    onClick={() => removeItem(id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default GroceryList;
