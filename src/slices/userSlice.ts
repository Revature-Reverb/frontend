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
        }
    }
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
