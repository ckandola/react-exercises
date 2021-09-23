import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiPrinter, FiDollarSign, FiLogOut } from 'react-icons/fi';
import { BiClipboard, BiNews } from 'react-icons/bi';
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

    const noSale = () => {
        console.log("Scan manager code to open the till.")
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
        <nav className="pos-sidebar">
            <button className="pos-sidebar-icon pos-sidebar-btn-basic" onClick={toggleIsOpen}>
                <GiHamburgerMenu />
            </button>
            
            <aside className={`pos-sidebar-nav${isOpen ? '-show' : ''}`}>
                <button className="pos-sidebar-btn-basic pos-sidebar-button" onClick={printLastReceipt}>
                    <FiPrinter />
                    <p>Print Last Receipt</p>
                </button>
                <button className="pos-sidebar-btn-basic pos-sidebar-button" onClick={noSale}>
                    <FiDollarSign />
                    <p>No Sale</p>
                </button>
                <button className="pos-sidebar-btn-basic pos-sidebar-button" onClick={printLogOffReport}>
                    <BiClipboard />
                    <p>Print Log-Off Report</p>
                </button>
                <button className="pos-sidebar-btn-basic pos-sidebar-button" onClick={showWhatsNew}>
                    <BiNews />    
                    <p>What's New</p>
                </button>
                <button className="pos-sidebar-btn-basic pos-sidebar-button" onClick={logoff}>
                    <FiLogOut />
                    <p>Log Off</p>
                </button>
            </aside>
            
            <Modal>
                <h2>What's New</h2>
                <ul className="pos-sidebar-whats-new">
                    <li>Sidebar bones have been added</li>
                    <li>LogOff logic will be added if I decide to add a login screen</li>
                </ul>
            </Modal>
        </nav>
    );
};

export default Sidebar;
