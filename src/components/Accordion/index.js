import React from 'react';
import {BsFillCircleFill, BsDashCircleFill} from 'react-icons/bs';


const Accordion = ({isOpen = false, question}) => {
    return (
        <div>
            <span>
                <h4>{question}</h4>
                {isOpen ? <BsDashCircleFill /> : <BsFillCircleFill />}
            </span>
        </div>
    );
};

export default Accordion;
