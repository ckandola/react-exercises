import React, { useEffect } from 'react';
import { CgPlayListAdd, CgPlayListSearch, CgUserList, CgPlayListCheck } from 'react-icons/cg';
import { useGlobalContext } from './index';
import catalog from './data.json';

const LookupPane = () => {
    const {
        posCartState, setPOSCartState, posCurrentItem,
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
        }}, [posCurrentItem, setPOSChoice, setPOSLoadType, setPOSQuantity]
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
        let isValid = false;
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
        } else {
            for (let i = 0; i < catalog.length; i++) {
                if (catalog[i]["item_num"] === posTextEntry) {
                    addItem(Number(posTextEntry), numQuantity, catalog[i]["desc"], posLoadType, Number(catalog[i]["price"]));
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
            setPOSError('');
            setPOSTextEntry('');
            setPOSQuantity('1');
            setPOSChoice(null);
        }
    }

    const addItem = (itemNum, amount, desc, load, price) => {
        console.log(`I am adding ${amount} of ${desc}, (${itemNum}) to the ItemContainer as ${load}`);
        const tempCart = posCartState.slice();
        tempCart.push({itemNum: itemNum, quantity: amount, description: desc, loadType: load, price: price});
        setPOSCartState(tempCart);
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
                    
                    {posChoice === 'edit' ? (
                        <div>{posCurrentItem.itemNum}</div>
                    ) : (
                            <input 
                                type="text"
                                value={posTextEntry}
                                className={`${posError.length > 0 && !posError.includes('Quantity') ? 'pos-lookup-input-error' : ''}`}
                                onChange={handleTextChange}
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
                <button type="submit">{`${posChoice === 'edit' ? 'Save Changes' : 'Submit'}`}</button>

            </form>
        </section>
    );
};

export default LookupPane;
