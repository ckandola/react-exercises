import React, {useContext} from 'react';
import {AppContext} from '../../context';
import './Modal.css';

const Home = () => {
    const data = useContext(AppContext);
    console.log(data);
    return (
        <main className="modal-main">
            <button className="modal-btn">
                Show Modal
            </button>
        </main>
    );
};

export default Home;
