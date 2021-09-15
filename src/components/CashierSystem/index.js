import React from 'react';
import Sidebar from './Sidebar';
import './CashierSystem.css';
import ItemContainer from './ItemContainer';
import LookupPane from './LookupPane';

const CashierSystem = () => {
    return (
        <section>
            <div className="pos-system-main">
                <Sidebar />
                <ItemContainer />
                <LookupPane />
            </div>
        </section>
    );
}

export default CashierSystem;
