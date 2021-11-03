import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { store } from "../app/store";
import { Comment } from '../models/commentModel';
import { createComment, getComment } from '../remote/reverb-api/comment.api'

export type CommentState = Comment;

const initialState: CommentState = {
    commentText: "",
};


export const getCommentAsync = createAsyncThunk<Comment, object>(
    'comment/get/async',
    async ({}, thunkAPI) => {
        try {
            return await getComment();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const postUserAsync = createAsyncThunk<Comment, Comment>(
    'user/post/async',
    async (neoUser: Comment, thunkAPI) => {
        try {
            const response = await createComment(neoUser);
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
                console.log (action.payload.email);
                return initialState;
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.email);
                return action.payload;
            })
            .addCase(postUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.email);
                return action.payload;
            })
            .addCase(putUserAsync.fulfilled, (state, action) => {
                console.log (action.payload.email);
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

export default userSlice.reducer;
