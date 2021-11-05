import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { store } from "../app/store";
import { Comment } from '../models/commentModel';

export type CommentState = Comment;

const initialState: CommentState = {
    commentText: "",
};
