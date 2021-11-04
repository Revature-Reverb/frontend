import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../slices/userSlice';
import authReducer from '../slices/authSlice';
import postReducer from '../slices/postSlice';
import profileReducer from '../slices/profileSlice';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
    post: postReducer,
    profile: profileReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
