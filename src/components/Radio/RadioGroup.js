import React, { useState } from 'react';
import './RadioGroup.css';

const RadioGroup = ({name, labels, onSubmit, submitDesc}) => {
    const [selected, setSelected] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(selected);
    }

    return (
        <div>
            <h3 className="radio-center-text">Submit to {submitDesc}</h3>
            <form onSubmit={handleSubmit} className="radio-form">
                {labels.map((label, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" name={name} id={index} onClick={() => setSelected(label)}/>
                            <label htmlFor={index} className="radio-label">
                                {label}
                            </label>
                        </div>
                    );
                })}
                <div className="radio-center-text">
                    <button type="submit" className="radio-submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RadioGroup;
