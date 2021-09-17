import {
    DELETE_CART,
    ADD_TO_CART,
    UPDATE_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY
} from './types';

// ADD TO CART
export const addToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        product
    })
}

export function UpdateCart(payload){
    return {
        type: UPDATE_CART,
        payload
    }
}
export function DeleteCart(payload){
    return{
        type: DELETE_CART,
        payload
    }
}
 
export function IncreaseQuantity(payload){
    return{
        type: INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type: DECREASE_QUANTITY,
        payload
    }
}
