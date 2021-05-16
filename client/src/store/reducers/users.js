import {usersTypes} from '../types'

const initialState = {
    isLoading: false, 
    users: [],
    searchedUsers: [],
    welcomeMsg: "You're welocome"
}

export default function usersReducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case usersTypes.IS_LOADING:
            return{
                ...state,
                isLoading: payload
            }
        case usersTypes.LOAD_USERS:
            return {
                ...state,
                isLoading: false,
                users: payload.users
            }
        case usersTypes.FIND_USER:
            return {
                ...state,
                isLoading: false,
                searchedUsers: payload.users
            }

        default:
            return state;
    }
}