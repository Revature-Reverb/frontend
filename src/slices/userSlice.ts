import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { store } from "../app/store";
import { User } from '../models/userModel';
import { createUser, removeUser, getUser, changeUser } from '../remote/reverb-api/user.api'

export type UserState = User;

const initialState: UserState = {
    userID: 0,
    username: "",
    firstName: "",
    lastName: ""
};

export const deleteUserAsync = createAsyncThunk<User, User>(
    'user/delete/async',
    async (neoUser: User, thunkAPI) => {
        try {
            const response = await removeUser(neoUser);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

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

export const postUserAsync = createAsyncThunk<User, User>(
    'user/post/async',
    async (neoUser: User, thunkAPI) => {
        try {
            const response = await createUser(neoUser);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const putUserAsync = createAsyncThunk<User, User>(
    'user/put/async',
    async (neoUser: User, thunkAPI) => {
        try {
            const response = await changeUser(neoUser);
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
            .addCase(deleteUserAsync.pending, (state) => {
                // do nothing
            })
            .addCase(getUserAsync.pending, (state) => {
                // do nothing
            })
            .addCase(postUserAsync.pending, (state) => {
                // do nothing
            })
            .addCase(putUserAsync.pending, (state) => {
                // do nothing
            })
            .addCase(deleteUserAsync.fulfilled, (state, action) => {
                return initialState;
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.username);
                return action.payload;
            })
            .addCase(postUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.username);
                return action.payload;
            })
            .addCase(putUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.username);
                return action.payload;
            })
            .addCase(deleteUserAsync.rejected, (state, action) => {
                console.log(action.error);
            })
            .addCase(getUserAsync.rejected, (state, action) => {
                console.log(action.error);
            })
            .addCase(postUserAsync.rejected, (state, action) => {
                console.log(action.error);
            })
            .addCase(putUserAsync.rejected, (state, action) => {
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
