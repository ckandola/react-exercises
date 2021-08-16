import React, {useEffect} from 'react';
import './GroceryBud.css';
import PropTypes from 'prop-types';

const GroceryAlert = ({type, msg, removeAlert}) => {
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [removeAlert]);
    
    return (
        <p className={`gList-alert gList-alert-${type}`}>{msg}</p>
    );
};

export default GroceryAlert;

GroceryAlert.propTypes = {
    type: PropTypes.string,
    msg: PropTypes.string,
    removeAlert: PropTypes.func
};
