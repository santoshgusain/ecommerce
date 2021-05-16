import {usersTypes} from '../types';
import axios from 'axios';

export const loadUsers = () => async (dispatch,getState) => {

    try{
        dispatch({
            type: usersTypes.IS_LOADING,
            payload: true
        })

        const users = (await axios.get('http://localhost:2009/users')).data
               
            dispatch ({
                type: usersTypes.LOAD_USERS,
                payload: {users},
            })
    }
        catch(error) {
          console.error(JSON.stringify(error))
        }
}

export const findUsers = (name) => async (dispatch,getState) => {

    try{
        dispatch({
            type: usersTypes.IS_LOADING,
            payload: true
        })

        const users = (await axios.get(`http://localhost:2009/users/find/${name}`)).data
               
            dispatch ({
                type: usersTypes.FIND_USER,
                payload: {users},
            })
    }
        catch(error) {
          console.error(JSON.stringify(error))
        }
}
