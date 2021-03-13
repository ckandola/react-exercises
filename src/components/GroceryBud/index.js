// from https://youtu.be/a_7Z7C_JCyo?t=14077

import React, {useState} from 'react';
import './GroceryBud.css';
import GroceryList from './GroceryList';
import GroceryAlert from './GroceryAlert';

const GroceryBud = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, message: '', type: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="gList-section-center">
            <form className="gList-grocery-form" onSubmit={handleSubmit}>
                {alert.show && <GroceryAlert />}
            </form>
            <div className="gList-grocery-container">
                <GroceryList />
                <button className="gList-clear-btn">
                    clear items
                </button>
            </div>
        </section>
    );
};

export default GroceryBud;
