import { combineReducers } from 'redux';
import { userReducer } from './UserReducer'
import counterReducer from '../features/counter/counterSlice';

export const primeReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})
export default primeReducer;
