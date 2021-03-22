import React from 'react';
import {useGlobalContext} from '../../context';
import './Modal.css';

const Home = () => {
    const {openModal} = useGlobalContext();

    return (
        <main className="modal-main">
            <button 
                className="modal-btn"
                onClick={openModal}>
                Show Modal
            </button>
        </main>
    );
};

export default Home;
