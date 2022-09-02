import {productTypes} from '../types'

const initialState = {
    isLoading: false, 
    products: [],
    searchedProduct: []
}

export default function productReducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case productTypes.IS_LOADING:
            return{
                ...state,
                isLoading: payload
            }
        case productTypes.LOAD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: payload.products
            }
        case productTypes.LOAD_SINGLE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                singleProduct: payload.singleProduct
            }
        case productTypes.FIND_PRODUCT:
            return {
                ...state,
                isLoading: false,
                searchedUsers: payload.users
            }

        default:
            return state;
    }
}