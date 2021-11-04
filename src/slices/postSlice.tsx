import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from '../models/postModel';
import { createPost, getPost } from "../remote/reverb-api/post.api";
import { store } from "../app/store";


export type PostState = Post;

const initialState: PostState = {
    title: "",
    text: "",
    imageURL: ""
};

export const getPostAsync = createAsyncThunk<Post, object>(
    'post/get/async',
    async ({}, thunkAPI) => {
        try {
            return await getPost();
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
    name: 'post',
    initialState: initialState,
    reducers: {
        createPost: (state, action: PayloadAction<Post>) => {
            return action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPostAsync.pending, (state) => {
            // do nothing
        })
        .addCase(postPostAsync.pending, (state) => {
            // do nothing
        })
        .addCase(getPostAsync.fulfilled, (state, action) => {
            console.log (action.payload);
            return action.payload;
        })
        .addCase(postPostAsync.fulfilled, (state, action) => {
            console.log (action.payload);
            return action.payload;
        })
        .addCase(getPostAsync.rejected, (state, action) => {
            console.log(action.error);
        })
        .addCase(postPostAsync.rejected, (state, action) => {
            console.log(action.error);
        })
    }
});

type Rootstate = ReturnType<typeof store.getState>;
export const selectPost = (state: Rootstate) => {
    return state.post
}

export default postSlice.reducer;