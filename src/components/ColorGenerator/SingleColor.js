import React, {useState, useEffect} from 'react';
import './ColorGenerator.css';
import PropTypes from 'prop-types';

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const bgcolor = rgb.join(',');

    useEffect(() => {
        const hideText = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(hideText);
    }, [alert]);

    return (
        <div 
            className={`cgen-color ${index > 10 && 'cgen-color-light'}`} 
            style={{backgroundColor: `rgb(${bgcolor})`}}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(`#${hexColor}`);
            }}
        >
            <p className="cgen-percent-value">{weight}%</p>
            <p className="cgen-color-value">#{hexColor}</p>
            {alert && <p className="cgen-alert">
                Copied to clipboard</p>}
        </div>
    );
};

export default SingleColor;

SingleColor.propTypes = {
    rgb: PropTypes.arrayOf(PropTypes.number),
    weight: PropTypes.number,
    index: PropTypes.number,
    hexColor: PropTypes.string
};
