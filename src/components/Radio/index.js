import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';

const Radio = ({order, name, id, label}) => {
    const getStyle = (i, m) => {
        let value = i * m;
        return {
            top: value,
            bottom: value,
            left: value,
            right: value,
        }
    }
    
    const i = 1;
    const outerStyle = getStyle(4, i);
    const innerStyle = getStyle(1, i);
    const selectedStyle = getStyle(2, i);
    const [getTaggerStyle, setTaggerStyle] = useState({top: parseInt(order) * 20, width: 25, height: 25});
    const [getTextStyle, setTextStyle] = useState({width: window.innerWidth});


    const handleResize = useCallback(event => {
        let w = 1 + Math.round(window.innerWidth / 300);
        setTaggerStyle({top: parseInt(order) * w * 10, width: w * 10, height: w * 10});
        setTextStyle({left: w * 13, fontSize: 7 * w});
    }, [order]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [handleResize])

    return(
        <div>
            <div className="radio-tagger" style={getTaggerStyle}>
                <input type="radio" name={name} id={id} />
                <label htmlFor={id}>
                    <div className="radio-text" style={getTextStyle}>
                        {label}
                    </div>
                    <div className="radio-outer" style={outerStyle}>
                        <div className="radio-inner" style={innerStyle}>
                            <div className="radio-selected" style={selectedStyle}></div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}

Radio.propTypes = {
    order: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string
}

export default Radio;