import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
	userId: 0,
};

const userInfoSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserId: (state, action: PayloadAction<number>) => {
			state.userId = action.payload;
		},
	},
});

export const { setUserId } = userInfoSlice.actions;
export const userIdReducer = userInfoSlice.reducer;
export const userId = (state: RootState) => state.userId.userId