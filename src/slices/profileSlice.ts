import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Profile } from "../models/profileModel";
import { getProfile } from "../remote/reverb-api/profile.api";
import { store } from "../app/store";

export type ProfileState = Profile;

const initialState: ProfileState = {
    id: 0,
    first_name: "My first name",
    last_name: "My last name",
    profile_img: "https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    header_img: "https://static.onecms.io/wp-content/uploads/sites/28/2021/05/06/portand-oregon-PORTLANDTG0521.jpg",
    about_me: "I like to eat food in general."
}

export const getProfileAsync = createAsyncThunk<Profile, object>(
    'profile/get/async',
    async ({}, thunkAPI) => {
        try {
            return await getProfile();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const profileSlice = createSlice({
    name:'profile',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileAsync.pending, (state) => {
                //do nothing
            })
            .addCase(getProfileAsync.fulfilled, (state, action) => {
                // console.log(action.payload.first_name);
                return action.payload;
            })
            .addCase(getProfileAsync.rejected, (state, action) => {
                console.log(action.error);
            })
    }

})

type Rootstate = ReturnType<typeof store.getState>;
export const selectProfile = (state: Rootstate) => {
    return state.profile
}

export default profileSlice.reducer;