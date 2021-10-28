import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../models/userModel';

export type UserState = User[];

const initialState: UserState = [{
    userID: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: ""
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

export const { setUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
