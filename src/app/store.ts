import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import primeReducer from '../reducers/primeReducer'

const composeEnhancers = compose;

export const store = createStore(primeReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
