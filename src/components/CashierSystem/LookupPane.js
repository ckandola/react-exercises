import React, { useState } from 'react';
import { CgPlayListAdd, CgPlayListSearch, CgUserList, CgPlayListCheck } from 'react-icons/cg';

const LookupPane = () => {
    const [choice, setChoice] = useState(null);

    const makeChoice = id => {
        switch(id) {
            case 'entry':
                setChoice('entry');
                console.log('You chose item entry');
                break;
            case 'search':
                setChoice('search');
                console.log('You chose item search.')
                break;
            case 'add_account':
                setChoice('account');
                console.log('You are searching for either military, MyLowe\'s, invoiced, or tax-exempt.');
                break;
            case 'invoice':
                setChoice('invoice');
                console.log('You are changing the invoice options');
                break;
            default:
                setChoice(null);
        }
    }

    const handleItemEntry = () => {
        console.log('I need to save the string state and use it here.');
        setChoice(null);
    }

    return (
        <section className="pos-lookup-pane">
            <div className={`pos-lookup-btn-container${choice ? '': '-show'}`}>
                <button className="pos-lookup-btn" onClick={() => makeChoice('entry')}>
                    <CgPlayListAdd className="pos-lookup-icon" />
                </button>
                <button className="pos-lookup-btn" onClick={() => makeChoice('search')}>
                    <CgPlayListSearch className="pos-lookup-icon" />
                </button>
                <button className="pos-lookup-btn" onClick={() => makeChoice('add_account')}>
                    <CgUserList className="pos-lookup-icon" />
                </button>
                <button className="pos-lookup-btn" onClick={() => makeChoice('invoice')}>
                    <CgPlayListCheck className="pos-lookup-icon" />
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
