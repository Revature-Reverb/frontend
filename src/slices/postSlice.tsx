import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from '../models/postModel';
import { createPost, getAllPosts } from "../remote/reverb-api/post.api";
import { store } from "../app/store";


export type PostState = Post[];

const initialState: PostState = [];

export const getPostsAsync = createAsyncThunk<Post[], object>(
    'post/get/async',
    async ({}, thunkAPI) => {
        try {
            return await getAllPosts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const postPostAsync = createAsyncThunk<Post, Post>(
    'post/post/async',
    async (neoPost: Post, thunkAPI) => {
        try {
            const response = await createPost(neoPost);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPostsAsync.pending, (state) => {
            // do nothing
        })
        .addCase(postPostAsync.pending, (state) => {
            // do nothing
        })
        .addCase(getPostsAsync.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(postPostAsync.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        .addCase(getPostsAsync.rejected, (state, action) => {
            console.log(action.error);
        })
        .addCase(postPostAsync.rejected, (state, action) => {
            console.log(action.error);
        })
    }
});

type Rootstate = ReturnType<typeof store.getState>;
export const selectPosts = (state: Rootstate) => {
    return state.posts
}

export default postSlice.reducer;