const reducer = (state, action) => {
    switch(action.type) {
        case 'CLEAR_CART':
            return {...state, cart:[]};
        default:
            console.log(`unknown action: ${action.type}`);
            break;
    }
    return state;
}

export default reducer;
