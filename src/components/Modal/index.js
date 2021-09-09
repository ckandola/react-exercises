import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {useGlobalContext} from '../../context';
import './Modal.css';
import PropTypes from 'prop-types';

const Modal = ({children}) => {
    const {isModalOpen, closeModal} = useGlobalContext();
    return (
        <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
            <div className="modal-container">
                {children}
                <button 
                    className="close-modal-btn"
                    onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    children: PropTypes.node
};
