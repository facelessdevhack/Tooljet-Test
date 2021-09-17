/* eslint-disable import/no-anonymous-default-export */
import {
    DELETE_CART,
    ADD_TO_CART,
    UPDATE_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY
} from '../actions/types';

const initialState = {
    cartItems: [],
    numberCart:0,
    Carts:[],
    _products:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.product.id,
                    quantity:1,
                    title:action.product.title,
                    image:action.product.image,
                    price:action.product.price,
                    category: action.product.category
                }
                state.Carts.push(cart);
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.product.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.product.id,
                        quantity:1,
                        title:action.product.title,
                        image:action.product.image,
                        price:action.product.price,
                        category: action.product.category
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
               
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
               
                return{
                    ...state
                }
            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.payload].id
                    })
                    
                }

        default:
            return state;
    }
}
