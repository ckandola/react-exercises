import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tooltip = ({text, canToggleWithClick = true, textPosition = 'bottom', children}) => {
    const [opacity, setOpacity]= useState(false);
    const [position, setPosition] = useState({top:1, left:1});
    const nodeRef = useRef();

    const toggle = isMouseOut => {
        const tooltipNode = nodeRef.current;
        
        setPosition({top: tooltipNode.offSetTop, left: tooltipNode.left})
        if(canToggleWithClick){
            // Only opens tooltip if text has been clicked, ensures that it is closed when not hovering
            if(!isMouseOut || (isMouseOut && opacity)){
                setOpacity(!opacity);
            }
        }
        else {
            // if we can't toggle with a click, just alternate opacity when hovering and when not
            setOpacity(!opacity);
        }
    }

    const handleClick = () => {
        if(canToggleWithClick) {
            toggle(false);
        }
    }

    const top = position.top || 0;
    const style = {
        zIndex: opacity ? 1000: -1000,
        top: top + (textPosition === 'bottom' ? + 20 : - 60),
        left: (position.left || 0),
        opacity: +opacity,
    };
    const tooltipClasses = 'tooltip ' + textPosition;

    return (
        <div ref={nodeRef} 
            style={{display: 'inline'}}>
            <span 
                style={{color: 'blue'}}
                onClick={event => handleClick()}
                onMouseOver={() => toggle(false)}
                onMouseOut={() => {toggle(true)}}
            >{children}</span>
            <div className={tooltipClasses}
                style={style}
                role="tooltip">
                    <div className="tooltip-arrow">
                        <div className="tooltip-inner">
                            {text}
                        </div>
                    </div>
            </div>
        </div>
    )

}

export default Tooltip;