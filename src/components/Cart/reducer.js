const reducer = (state, action) => {
    switch(action.type) {
        case 'CLEAR_CART':
            return {...state, cart:[]};
        case 'REMOVE_ITEM':
            const newCart = state.cart.filter(x => x.id !== action.payload);
            return {...state, cart: newCart};
        case 'INCREASE':
            const incrCart = state.cart.map(x => {
                if (x.id === action.payload) {
                    return {...x, amount: x.amount + 1};
                }
                return x;
            });
            return {...state, cart: incrCart};
        case 'DECREASE':
            const decrCart = state.cart.map(x => {
                if (x.id === action.payload) {
                    return {...x, amount: x.amount - 1};
                }
                return x;
            }).filter(x => x.amount !== 0);
            return {...state, cart: decrCart};
        case 'GET_TOTALS':
            let {cartTotal, cartAmount} = state.cart.reduce((cartAccum, cartItem) => {
                const {price, amount} = cartItem;
                cartAccum.cartAmount += amount;
                cartAccum.cartTotal += price * amount;
                return cartAccum;
            }, {
                cartTotal: 0, cartAmount: 0
            });
            cartTotal = parseFloat(cartTotal.toFixed(2));
            return {...state, cartTotal, cartAmount};
        case 'LOADING':
            return {...state, loading: true};
        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, loading: false};
        default:
            console.log(`unknown action: ${action.type}`);
            break;
    }
    return state;
}

export default reducer;
