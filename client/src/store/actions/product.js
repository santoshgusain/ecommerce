import {productTypes} from '../types';
import axios from 'axios';

export const loadProducts = () => async (dispatch,getState) => {

    try{
        dispatch({
            type: productTypes.IS_LOADING,
            payload: true
        })

        const products = (await axios.get('http://localhost:2009/products')).data
        
            dispatch ({
                type: productTypes.LOAD_PRODUCTS,
                payload: {products},
            })
    }
        catch(error) {
          console.error(JSON.stringify(error))
        }
}

export const findProducts = (name) => async (dispatch,getState) => {

    try{
        dispatch({
            type: productTypes.IS_LOADING,
            payload: true
        })

        const users = (await axios.get(`http://localhost:2009/users/find/${name}`)).data
               
            dispatch ({
                type: productTypes.FIND_PRODUCT,
                payload: {users},
            })
    }
        catch(error) {
          console.error(JSON.stringify(error))
        }
}
