import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		authorized: false
	},
	reducers: {
		login: (state) => {
			state.authorized = true
		},
		logout: (state) => {
			state.authorized = false
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;