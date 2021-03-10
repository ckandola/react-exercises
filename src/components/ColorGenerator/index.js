// from https://youtu.be/a_7Z7C_JCyo?t=11478

import React, {useState} from 'react';
import './ColorGenerator.css';
import Values from 'values.js';
import SingleColor from './SingleColor';

const ColorGenerator = () => {
    const [color, setColor] = useState('#8b0000');
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const [numResults, setNumResults] = useState(10);

    const handleSubmit = e => {
        e.preventDefault();
        try {
            // generates shades and tints divided by 10, 100 / 10 = 10. Larger number ==> less shades & tints
            let colors = new Values(color).all(numResults);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    const handleNumChange = e => {
        if (!e.target.value) {
            return;
        }
        setNumResults(e.target.value <= 0 ? 1 : Math.floor(100 / Math.floor(e.target.value)));
    };

    return (
        <>
            <div className="cgen-container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        className={`${error ? 'error' : 'null'}`}/>
                    <input
                        type="number"
                        className="cgen-input-num"
                        placeholder={Math.floor(100 / numResults)}
                        step={1}
                        onChange={e => handleNumChange(e)}
                    />
                    <button className="cgen-btn" type="submit">Submit</button>
                </form>
            </div>
            <section className="cgen-colors">
                {list.map((listItem, index) => {
                    return (
                        <SingleColor key={index} index={index} className="cgen-color" {...listItem} hexColor={listItem.hex} />
                    );
                })}
            </section>
        </>
    );
};

export default ColorGenerator;
