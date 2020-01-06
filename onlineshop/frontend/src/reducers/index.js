const initialState = {
  cart: []
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_ITEM_ON_CART':
            return {...state, };
        default:
            return state
    }

}
export default rootReducer;
