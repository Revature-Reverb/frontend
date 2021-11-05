import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Token } from "../models/tokenModel";
import { getToken } from '../remote/reverb-api/token.api'
import { Credentials } from "../models/credModel";

export type TokenState = Token[];

const initialState: TokenState = [{
    token: ""
}]

export const setTokenAsync = createAsyncThunk<Token, Credentials>(
    'token/get/async',
    async ( cred: Credentials, thunkAPI ) =>
    {
        try
        {
            return await getToken( cred.email, cred.password );
        } catch ( error )
        {
            return thunkAPI.rejectWithValue( error );
        }
    }
);

export const authSlice = createSlice( {
    name: "auth",
    initialState: initialState,

    reducers: {
        logout: ( state ) =>
        {
            state.pop()
            state.push( initialState[0] )
        },
    },
    extraReducers: ( builder ) =>
    {
        builder
            .addCase( setTokenAsync.pending, ( state ) =>
            {
                // do nothing
            } )
            .addCase( setTokenAsync.fulfilled, ( state, action ) =>
            {
                console.log( "From setTokenAsync extraReducer: ", action.payload.token );
                return [action.payload];
<<<<<<< HEAD
			})
            .addCase(setTokenAsync.rejected, (state, action) => {
                // console.log(action.error);
            })
}
=======
            } )
            .addCase( setTokenAsync.rejected, ( state, action ) =>
            {
                console.log( action.error );
            } )
    }
>>>>>>> main

} );
export const { logout } = authSlice.actions;
export default authSlice.reducer;