import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';
import PropTypes from 'prop-types';

const FirstComponents = ({name = 'Anonymous'}) => {
    return (
        <div>
            <FirstComponent />    
            <SecondComponent />
            <NamedComponent name={name} />
        </div>
    );
};

export default FirstComponents;

FirstComponents.propTypes = {
    name: PropTypes.string,
}
