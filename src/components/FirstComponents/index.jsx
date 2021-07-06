import React from 'react';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';

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
