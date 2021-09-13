import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const LookupPane = () => {
    const [choice, setChoice] = useState('hello');

    const makeChoice = id => {
        switch(id) {
            case 'entry':
                setChoice('entry');
                console.log('You chose item entry');
                break;
            default:
                setChoice(null);
        }
    }

    const handleItemEntry = () => {
        console.log('I need to save the string state and use it here.')
    }

    return (
        <section className="pos-lookup-pane">
            <div className={`pos-lookup-btns${choice ? '': '-show'}`}>
                <button onClick={() => makeChoice('entry')}>
                    <GiHamburgerMenu />
                    <div>Item entry</div>
                </button>
                <button>
                    <GiHamburgerMenu />
                    <div>Item lookup</div>
                </button>
                <button>
                    <GiHamburgerMenu />
                    <div>customer lookup</div>
                </button>
                <button>
                    <GiHamburgerMenu />
                    <div>Invoice options</div>
                </button>
            </div>
            <div className={`pos-lookup-search${choice ? '-show' : ''}`}>
                <input 
                    type="text"
                    placeholder="Enter an item number" />
                <button onClick={handleItemEntry}>Submit</button>
            </div>
        </section>
    );
};

export default LookupPane;
