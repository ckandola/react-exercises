import React, {useState} from 'react';
import {BsFillPlusCircleFill, BsDashCircleFill} from 'react-icons/bs';
import './index.css';


const Accordion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <article className="question">
            <header>
                <h4>{question}</h4>
                <button className="btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <BsDashCircleFill /> : <BsFillPlusCircleFill />}
                </button>

            </header>
            {isOpen && <p>{answer}</p>}
        </article>
    );
};

export default Accordion;
