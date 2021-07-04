import React, {useState} from 'react';
import {BsFillPlusCircleFill, BsDashCircleFill} from 'react-icons/bs';
import './Accordion.css';


const AccordionItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <article className="accordion-question">
            <header>
                <h4>{question}</h4>
                <button className="accordion-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <BsDashCircleFill /> : <BsFillPlusCircleFill />}
                </button>

            </header>
            {isOpen && <p>{answer}</p>}
        </article>
    );
};

export default AccordionItem;
