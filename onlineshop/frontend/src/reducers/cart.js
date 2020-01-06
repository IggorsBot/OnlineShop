const initialState = {
    price: 0,
    items: 0,
};

export function cart_detail(state = initialState, action) {
    switch(action.type){
        case 'ADD_ITEM_ON_CART':
            return {...state, price: action.payload.price, items: action.payload.items};
        default:
            return state
    }

}
export default cart_detail;
