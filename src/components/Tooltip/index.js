import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

const Tooltip = ({
    text, 
    canToggleWithClick = true,
    textPosition = "bottom",
    children 
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef();

    const styleRef = useRef(null);
    
    const handleMouseOver = () => {
        setIsOpen(true);
    }
    
    const handleMouseOut = () => {
        setIsOpen(false);
    }
    
    useEffect(() => {
        const tooltipStyle = styleRef.current;
        switch (textPosition) {
            case 'top' :
                tooltipStyle.style.top = '-5.2em';
                break;
            case 'left' :
                tooltipStyle.style.left = '-10%';
                break;
            default:
                return;
        }
    }, [textPosition]);

    return (
        <div ref={tooltipRef}>
            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {children}
            </span>
            <div>
                <div className={`tooltip-main${isOpen ? '-show tooltip_' + textPosition : ''}`}
                    ref={styleRef}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
