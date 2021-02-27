// from https://youtu.be/a_7Z7C_JCyo?t=10352

import React from 'react';
import './LoremIpsum.css';
import data from './data';

const LoremIpsum = () => {
    return (
        <div>
            <h4>Lorem Ipsum</h4>
            <p>{data}</p>
        </div>
    );
};

export default LoremIpsum;
