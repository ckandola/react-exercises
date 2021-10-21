import React, { useEffect } from 'react';
import { CgPlayListAdd, CgPlayListSearch, CgUserList, CgPlayListCheck } from 'react-icons/cg';
import { useGlobalContext } from './index';
import catalog from './data.json';

const LookupPane = () => {
    const {
        posCartState, setPOSCartState, 
        posCurrentItem, setPOSCurrentItem,
        posLoadType, setPOSLoadType,
        posQuantity, setPOSQuantity,
        posChoice, setPOSChoice,
        posError, setPOSError,
        posTextEntry, setPOSTextEntry
    } = useGlobalContext();

    useEffect(() => {
        if (posCurrentItem) {
            setPOSChoice('edit');
            setPOSLoadType(posCurrentItem.loadType);
            setPOSQuantity(posCurrentItem.quantity.toString());
            setPOSError('');
        }}, [posCurrentItem, setPOSChoice, setPOSLoadType, setPOSQuantity, setPOSError]
    )

    const makeChoice = id => {
        switch(id) {
            case 'entry':
                setPOSChoice('entry');
                console.log('You chose item entry');
                break;
            case 'search':
                setPOSChoice('search');
                console.log('You chose item search.')
                break;
            case 'add_account':
                setPOSChoice('account');
                console.log('You are searching for either military, MyLowe\'s, invoiced, or tax-exempt.');
                break;
            case 'invoice':
                setPOSChoice('invoice');
                console.log('You are changing the invoice options');
                break;
            case 'edit':
                break;
            default:
                setPOSChoice(null);
        }
    }

    const handleTextChange = e => {
        setPOSTextEntry(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleItemEntry();
    }

    const handleItemEntry = () => {
        if (posChoice !== 'edit' && posTextEntry.length === 0) {
            return;
        }
        if (posChoice === 'price') {
            for (let i = 0; i < catalog.length; i++) {
                if (catalog[i]["item_num"] === posCurrentItem.itemNum) {
                    if (Math.abs(Number(catalog[i]["price"]) - Number(posTextEntry)) > 10) {
                        setPOSError('You need a manager override.')
                        // todo: set manager override message
                    } else {
                        posCartState[posCurrentItem.index] = {...posCurrentItem, price: Number(posTextEntry)}
                        setPOSTextEntry('');
                        resetContextVars();
                    }
                    i = catalog.length;
                }
            }
            return;
        }

        let isValid = false;
        if (posQuantity === '0' && posCurrentItem) {
            removeItem();
            return;
        }
        const numQuantity = Number(posQuantity.replace(/[\D]/ig, ''));
        if (numQuantity <= 0) {
            setPOSError(`ERROR: Quantity must contain at least one number.`);
            return;
        }

        if (posChoice === 'edit') {
            let tempCart = posCartState.slice();
            const tempItem = tempCart[posCurrentItem.index];
            tempItem.quantity = numQuantity;
            tempItem.loadType = posLoadType;
            tempCart[posCurrentItem.index] = tempItem;
            setPOSCartState(tempCart);
            isValid = true;
        } else if (posChoice === 'search') {
            searchForTerm(posTextEntry);
            return;
        } else {
            for (let i = 0; i < catalog.length; i++) {
                if (catalog[i]["item_num"] === posTextEntry) {
                    addItem(posTextEntry, numQuantity, catalog[i]["desc"], posLoadType, Number(catalog[i]["price"]));
                    i = catalog.length;
                    isValid = true;
                }
    
                if (i === catalog.length - 1) {
                    console.log('Invalid item number')
                    setPOSError(`ERROR: "${posTextEntry}" is an invalid item number.`);
                }
            }
        }
        if (isValid) {
            setPOSTextEntry('');
            resetContextVars();
        }
    }

    const addItem = (itemNum, amount, desc, load, price) => {
        console.log(`I am adding ${amount} of ${desc}, (${itemNum}) to the ItemContainer as ${load}`);
        const tempCart = posCartState.slice();
        tempCart.push({itemNum: itemNum, quantity: amount, description: desc, loadType: load, price: price});
        setPOSCartState(tempCart);
    }

    const removeItem = () => {
        console.log('removing')
        let tempCart = posCartState.slice();
        tempCart.splice(posCurrentItem.index, 1);
        setPOSCartState(tempCart);
        resetContextVars();
    }

    const priceChange = () => {
        setPOSChoice('price');
        setPOSTextEntry(`${posCurrentItem.price}`);
    }

    const resetContextVars = () => {
        setPOSCurrentItem(null);
        setPOSLoadType('CW');
        setPOSQuantity('1');
        setPOSChoice(null);
        setPOSError('');
    }

    // posTextEntry contains search term
    /* we need to know if the search term is an item num, a description, or an alt term */
    const searchForTerm = () => {
        console.log(`Searching for ${posTextEntry}...`);
        for (let i = 0; i < catalog.length; i++) {
            if (posTextEntry === catalog[i].item_num) {
                // display result
            } else if (posTextEntry === catalog[i].desc) {
                // display result
            } else {
                const splitEntry = posTextEntry.toLowerCase().split(' ');
                for (let word of splitEntry) {
                    if (catalog[i].tags.includes(word)) {
                        // display result
                        console.log(`item ${catalog[i].item_num} is a match!`);
                    }
                }
            }
        }
    }

    return (
        <section className="pos-lookup-pane">
            <div className={`pos-lookup-btn-container${posChoice ? '': '-show'}`}>
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
            {posError.length > 0 && (
                <div className="pos-lookup-error">
                    <div className="pos-lookup-error-msg">
                        {posError}
                    </div>
                </div>
            )}
            <form className={`pos-lookup-search${posChoice ? '-show' : ''}`}
                onSubmit={handleSubmit}>
                <div className="pos-lookup-grid"> 
                    {posChoice === 'entry' && (
                        <div>Item entry</div>
                    )}
                    
                    {(posChoice === 'edit' || posChoice === 'price') ? (
                        <div style={{width: '110%'}}>
                            {posChoice === 'edit' && (
                                <div>
                                    <button type="button" className="pos-lookup-item-edit-btn" onClick={priceChange}>Edit</button>
                                    <button type="button" className="pos-lookup-item-edit-delete-btn" onClick={removeItem}>Remove</button>
                                </div>
                            )}
                            <div className="pos-lookup-grid">
                                <div className="pos-lookup-item-edit-title">{`${(posCurrentItem.description).substring(0, 20)}${(posCurrentItem.description).length > 20 ? '...' : ''}` }</div>
                                <div className="pos-lookup-item-edit-number">{posCurrentItem.itemNum}</div>
                            </div>
                            {posChoice === 'price' && (
                                <div style={{display: 'flex'}}>
                                <div>New Price: </div>
                                <input 
                                    type="number"
                                    value={posTextEntry}
                                    onChange={handleTextChange}
                                    className="pos-lookup-item-edit-price"
                                />
                                </div>
                            )}
                        </div>
                    ) : (
                            <input 
                                type="text"
                                value={posTextEntry}
                                className={`${posError.length > 0 && !posError.includes('Quantity') ? 'pos-lookup-input-error' : ''}`}
                                onChange={handleTextChange}
                                placeholder={`${posChoice === 'search' ? 'Search by item number or description' : ''}`}
                            />
                        )
                    }
                </div>
                {(posChoice === 'entry' || posChoice === 'edit') && (
                    <div>
                        <div className="pos-lookup-item-edit1">
                            Select load type
                            <button className={`${posLoadType === 'CW' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setPOSLoadType('CW')}>CW</button>
                            <button className={`${posLoadType === 'NL' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setPOSLoadType('NL')}>NL</button>
                            <button className={`${posLoadType === 'PL' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setPOSLoadType('PL')}>PL</button>
                            <button className={`${posLoadType === 'LD' ? 'pos-lookup-load-selected' : ''}`} type="button"
                                onClick={() => setPOSLoadType('LD')}>LD</button>
                        </div>
                        <div className="pos-lookup-item-edit2">
                            Quantity
                            <input type="text" value={posQuantity} onChange={e => setPOSQuantity(e.target.value)}
                                className={`${posError.length > 0 && posError.includes('Quantity') ? 'pos-lookup-input-error' : ''}`}/>
                        </div>
                    </div>
                )}
                <button type="submit">{`${posChoice === 'edit' ? 'Save Changes' : posChoice === 'search' ? 'Search' : 'Submit'}`}</button>

            </form>
        </section>
    );
};

export default LookupPane;
