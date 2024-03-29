import React, {useState} from 'react';
import {BsFillPlusCircleFill, BsDashCircleFill} from 'react-icons/bs';
import './Accordion.css';
import PropTypes from 'prop-types';

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
            {isOpen && <p className="accordion-answer">{answer}</p>}
        </article>
    );
};

export default AccordionItem;

AccordionItem.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
};
