import {combineReducers} from 'redux'

import usersReducer from './users'
import productReducer from './product'

export default combineReducers({
    usersReducer,productReducer
})