import React, { useState } from 'react';
import { CgPlayListAdd, CgPlayListSearch, CgUserList, CgPlayListCheck } from 'react-icons/cg';
import { useGlobalContext } from './index';
import catalog from './data.json';

const LookupPane = () => {
    const { posCartState, setPOSCartState, posCurrentItem, setPOSCurrentItem } = useGlobalContext();
    const [choice, setChoice] = useState(null);
    const [error, setError] = useState('');
    const [textEntry, setTextEntry] = useState('');
    const [loadType, setLoadType] = useState('CW');
    const [quantity, setQuantity] = useState('1');

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

    const handleTextChange = e => {
        setTextEntry(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleItemEntry();
    }

    const handleItemEntry = () => {
        if (textEntry.length === 0) {
            return;
        }
        let isValid = false;
        const numQuantity = Number(quantity.replace(/[\D]/ig, ''));
        if (numQuantity <= 0) {
            setError(`ERROR: Quantity must contain at least one number.`);
            return;
        } 

        for (let i = 0; i < catalog.length; i++) {
            if (catalog[i]["item_num"] === textEntry) {
                addItem(Number(textEntry), numQuantity, catalog[i]["desc"], loadType, Number(catalog[i]["price"]));
                i = catalog.length;
                isValid = true;
            }

            if (i === catalog.length - 1) {
                console.log('Invalid item number')
                setError(`ERROR: "${textEntry}" is an invalid item number.`);
            }
        }
        if (isValid) {
            setError('');
            setTextEntry('');
            setQuantity('1');
            setChoice(null);
        }
    }

    const addItem = (itemNum, amount, desc, load, price) => {
        console.log(`I am adding ${amount} of ${desc}, (${itemNum}) to the ItemContainer as ${load}`);
        const tempCart = posCartState.slice();
        tempCart.push({itemNum: itemNum, amount: amount, description: desc, load: load, price: price});
        setPOSCartState(tempCart);
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
            {error.length > 0 && (
                <div className="pos-lookup-error">
                    <div className="pos-lookup-error-msg">
                        {error}
                    </div>
                </div>
            )}
            <form className={`pos-lookup-search${choice ? '-show' : ''}`}
                onSubmit={handleSubmit}>
                <div className="pos-lookup-grid"> 
                    {choice === 'entry' && (
                        <div>Item entry</div>
                    )}
                    <input 
                        type="text"
                        value={textEntry}
                        className={`${error.length > 0 && !error.includes('Quantity') ? 'pos-lookup-input-error' : ''}`}
                        onChange={handleTextChange}
                    />
                </div>
                {choice === 'entry' && (
                    <div>
                        <div className="pos-lookup-item-edit1">
                            Select load type
                            <button className={`${loadType === 'CW' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setLoadType('CW')}>CW</button>
                            <button className={`${loadType === 'NL' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setLoadType('NL')}>NL</button>
                            <button className={`${loadType === 'PL' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setLoadType('PL')}>PL</button>
                            <button className={`${loadType === 'LD' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setLoadType('LD')}>LD</button>
                        </div>
                        <div className="pos-lookup-item-edit2">
                            Quantity
                            <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)}
                                className={`${error.length > 0 && error.includes('Quantity') ? 'pos-lookup-input-error' : ''}`}/>
                        </div>
                    </div>
                )}
                <button type="submit">Submit</button>

            </form>
        </section>
    );
};

export default LookupPane;
