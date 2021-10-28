import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../app/store";
import { User } from '../models/userModel';

export type UserState = User[];

// filled for testing purposes, remember to clear initialState
const initialState: UserState = [{
    userID: 0,
    username: "user",
    password: "password",
    firstName: "first",
    lastName: "last"
}];

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.pop();
            state.push(action.payload);
        },
        deleteUser: (state) => {
            state = initialState;
        },
        updateUser: (state, action: PayloadAction<User>) => {
            let tempUser = state.pop();
            tempUser = {
                ...tempUser,
                ...action.payload
            }
            state.push(tempUser);
        }
    }
});

type Rootstate = ReturnType<typeof store.getState>;

export const selectUsers = (state:Rootstate) => {
   return state.user;
}

export const { setUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
