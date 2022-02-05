import cartActionConstants from "../actionConstants/cartActionConstants"

export const addToCart = (item) => {
    return { type: cartActionConstants.ADD_TO_CART, payload: item }
}

export const removeFromCart = (item) => {
    return { type: cartActionConstants.REMOVE_FROM_CART, payload: item }
}

export const emptyCart = () => {
    return { type: cartActionConstants.EMPTY_CART }
}