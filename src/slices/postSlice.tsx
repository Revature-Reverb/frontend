import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from '../models/postModel';

export type PostState = Post[];

const initialState: PostState = [{
    text: "",
}];

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        setPost: (state, action: PayloadAction<Post>) => {
            state.pop();
            state.push(action.payload);
        },
        deletePost: (state) => {
            state = initialState;
        },
        updatePost: (state, action: PayloadAction<Post>) => {
            let tempPost = state.pop();
            tempPost = {
                ...tempPost,
                ...action.payload
            }
            state.push(tempPost);
        }
    }
});

export const { setPost, deletePost, updatePost } = postSlice.actions;

export default postSlice.reducer;