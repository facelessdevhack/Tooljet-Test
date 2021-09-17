/* eslint-disable import/no-anonymous-default-export */
import {
    FETCH_PRODUCTS,
    FETCHING_PRODUCTS,
    PRODUCTS_FETCHING_FAILED,
    FETCHING_CATEGORIES,
    FETCHED_CATEGORIES,
    CATEGORY_FETCHING_FAILED
} from '../actions/types';

const initialState = {
    isLoading: null,
    fetchingFailed: false,
    productList: [],
    categories: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_PRODUCTS:
        case FETCHING_CATEGORIES:
            return {
                ...state,
                isLoading: true,
                fetchingFailed: false
            }
        case FETCHED_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                isLoading: false
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                productList: action.payload,
                isLoading: false
            }
        case CATEGORY_FETCHING_FAILED:
        case PRODUCTS_FETCHING_FAILED:
            return {
                ...state,
                isLoading: false,
                fetchingFailed: true
            }
        default:
            return state;
    }
}
