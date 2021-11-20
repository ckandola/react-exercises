import React from 'react';
import Sidebar from './Sidebar';
import './CashierSystem.css';
import Cart from './Cart';
import LookupPane from './LookupPane';
import { useGlobalContext } from '../../context';

const CashierSystem = () => {
    return (
        <section className="pos-system">
            <div className="pos-system-main">
                <Sidebar />
                <Cart />
                <LookupPane />
            </div>
        </section>
    );
}

export { useGlobalContext };

export default CashierSystem;
