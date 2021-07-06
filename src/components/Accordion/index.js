import React from 'react';
import AccordionItem from './AccordionItem';
import accordionData from './data';
import './Accordion.css';
import PropTypes from 'prop-types';

const Accordion = ({title}) => {
    
    return (
        <div className="accordion-main">
            <div className="accordion-container">
                <h3>{title}</h3>
                <section>
                {accordionData.map(accordion => {
                    return (
                    <AccordionItem key={accordion.id} question={accordion.title} answer={accordion.info} />
                    );
                })}
                </section>
            </div>
        </div>
    );
};

export default Accordion;

Accordion.propTypes = {
    title: PropTypes.string,
};
