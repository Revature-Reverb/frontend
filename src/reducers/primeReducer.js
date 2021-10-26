import { combineReducers } from 'redux';
import { userReducer } from './UserReducer'

export const primeReducer = combineReducers({
    user: userReducer
})
export default primeReducer;
