import cartActionConstants from "../actionConstants/cartActionConstants";

const INITIAL_STATE = {
    items: [],
    count: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    if (action.type === cartActionConstants.ADD_TO_CART) {
        return { items: [...state.items, action.payload], count: state.count + 1 }
    }

    return state;
};

export default cartReducer;