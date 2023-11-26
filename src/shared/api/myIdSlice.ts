import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";

const initialState = {
	myId: 0,
};

const userInfoSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserId: (state, action: PayloadAction<number>) => {
			state.myId = action.payload;
		},
	},
});

export const { setUserId } = userInfoSlice.actions;
export const userIdReducer = userInfoSlice.reducer;
export const myId = (state: RootState) => state.myId.myId