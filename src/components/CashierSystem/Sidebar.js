import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Modal from '../Modal';
import { useGlobalContext } from '../../context';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useGlobalContext();

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const printLastReceipt = () => {
        console.log("Your last receipt was printed");
    }
    
    const printLogOffReport = () => {
        console.log("Your log-off report was printed");
    }

    const showWhatsNew = () => {
        openModal();
    }

    const logoff = () => {
        console.log("You have signed out");
    }

    return (
        <section className="pos-sidebar">
            <button className="pos-sidebar-icon" onClick={toggleIsOpen}>
                <GiHamburgerMenu />
            </button>
            
            <aside className={`pos-sidebar-nav${isOpen ? '-show' : ''}`}>
                <button onClick={printLastReceipt}>Print Last Receipt</button>
                <button onClick={printLogOffReport}>Print Log-Off Report</button>
                <button onClick={showWhatsNew}>What's New</button>
                <button onClick={logoff}>Log Off</button>
            </aside>
            
            <Modal>
                <h2>What's New</h2>
                <ul className="pos-sidebar-whats-new">
                    <li>Sidebar bones have been added</li>
                    <li>LogOff logic will be added if I decide to add a login screen</li>
                </ul>
            </Modal>
        </section>
    );
};

export default Sidebar;
