// from https://youtu.be/a_7Z7C_JCyo?t=10352

import React, {useState} from 'react';
import './LoremIpsum.css';
import data from './data';

const LoremIpsum = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        let amount = parseInt(count);
        amount = amount <= 0 ? 0 : amount > 8 ? 8 : amount;
        setText(data.slice(0, amount));
    }

    const handleChange = e => {
        setCount(e.target.value);
    }

    return (
        <div>
            <section className="ipsum-section-center">
                <h3>Need Lorem Ipsum?</h3>
                <form className="lorem-form" onSubmit={handleSubmit}>
                    <label htmlFor="amount">
                        paragraphs: 
                    </label>
                    <input type="number" name="amount" id="amount" value={count}
                        onChange={handleChange}/>
                    <button type="submit" className="ipsum-btn">Generate</button> 
                </form>
                <div className="lorem-text">
                    {text.map((sentence, index) => {
                        return <p key={index}>{sentence}</p>
                    })};
                </div>
            </section>
        </div>
    );
};

export default LoremIpsum;
