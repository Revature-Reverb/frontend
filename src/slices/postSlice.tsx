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
    },
    extraReducers: (builder) => {
    }
});


export default postSlice.reducer;