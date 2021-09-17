import axios from "axios";
import {
    FETCH_PRODUCTS,
    FETCHING_PRODUCTS,
    PRODUCTS_FETCHING_FAILED,
    FETCHING_CATEGORIES,
    FETCHED_CATEGORIES,
    CATEGORY_FETCHING_FAILED
} from './types';


export const getProducts = () => (dispatch, getState) => {
    dispatch({type: FETCHING_PRODUCTS})
    axios.get("https://fakestoreapi.com/products")
         .then(res => {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({
                type: PRODUCTS_FETCHING_FAILED
            })
            console.log(err.response)
        })
            
}
export const getCategories = () => (dispatch) => {
    dispatch({type: FETCHING_CATEGORIES})
    axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            dispatch({
                type: FETCHED_CATEGORIES,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({
                type: CATEGORY_FETCHING_FAILED
            })
            console.log(err.response)
        })
}