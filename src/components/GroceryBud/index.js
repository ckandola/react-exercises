// from https://youtu.be/a_7Z7C_JCyo?t=14077

import React, {useEffect, useState} from 'react';
import './GroceryBud.css';
import GroceryList from './GroceryList';
import GroceryAlert from './GroceryAlert';

const getLocalStorage = () => {
    let tempList = localStorage.getItem('grocery-list');
    if (tempList) {
        return JSON.parse(localStorage.getItem('grocery-list'));
    }
    return [];
}

const GroceryBud = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, message: '', type: ''});

    useEffect(() => {
        localStorage.setItem('grocery-list', JSON.stringify(list));
    }, [list]);

    const handleSubmit = e => {
        e.preventDefault();
        if (!name) {
            showAlert(true, 'danger', 'Please enter a value.');
        } else {
            if (isEditing) {
                showAlert(true, 'success', `Changed to ${name}.`);
                setList(list.map(item => {
                    if(item.id === editID) {
                        return {...item, title: name};
                    }
                    return item;
                }));
                setName('');
                setEditID(null);
                setIsEditing(false);
            } else {
                showAlert(true, 'success', `Added ${name} to list.`)
                const newItem = {id: new Date().getTime().toString(), 
                    title: name};
                setList([...list, newItem]);
                setName('');
            }
        }
    }

    const clearItems = () => {
        showAlert(true, 'danger', 'List has been cleared.')
        setList([]);
    }

    const showAlert = (show=false, type="", msg="") => {
        setAlert({show, type, msg});
    }

    const removeItem = id => {
        const item = list.find(x => x.id === id);
        showAlert(true, 'danger', `Removed ${item.title}.`);
        setList(list.filter(x => x.id !== id));
    }

    const editItem = id => {
        const item = list.find(x => x.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(item.title);
    }

    return (
        <section className="gList-section-center">
            <form className="gList-grocery-form" onSubmit={handleSubmit}>
                <h3>Grocery Bud</h3>
                <div className="gList-form-control">
                    <input 
                        type="text" 
                        className="gList-grocery"
                        placeholder="e.g. milk"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <button 
                        type="submit" 
                        className="gList-submit-btn" 
                        onClick={handleSubmit}>
                        {isEditing ? 'Edit' : 'Submit'}
                    </button>
                </div>
                {alert.show && <GroceryAlert {...alert} removeAlert={showAlert}/>}
            </form>
            {list.length > 0 && (
                <div className="gList-grocery-container">
                    <GroceryList items={list} removeItem={removeItem} editItem={editItem}/>
                    <button 
                        className="gList-clear-btn"
                        onClick={clearItems}>
                        Clear Items
                    </button>
                </div>
            )}
        </section>
    );
};

export default GroceryBud;
