import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../app/store";
import { User } from '../models/userModel';
import { getUser } from '../remote/reverb-api/user.api'

export type UserState = User;

const initialState: UserState = {
    userID: 0,
    username: "",
    firstName: "",
    lastName: ""
};

export const getUserAsync = createAsyncThunk<User, object>(
    'user/get/async',
    async ({}, thunkAPI) => {
        try {
            const response = await getUser();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        deleteUser: (state) => {
            return initialState;
        },
        updateUser: (state, action: PayloadAction<User>) => {
            let tempUser = state;
            tempUser = {
                ...tempUser,
                ...action.payload
            }
            return (tempUser);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserAsync.pending, (state) => {
                // do nothing
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.username);
                return action.payload;
            })
            .addCase(getUserAsync.rejected, (state, action) => {
                console.log(action.error);
            })
}
});

type Rootstate = ReturnType<typeof store.getState>;
export const selectUser = (state: Rootstate) => {
    return state.user
}

export const { setUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
