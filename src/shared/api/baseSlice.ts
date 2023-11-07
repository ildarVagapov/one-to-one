import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
	name: 'base',
	initialState: {
		modalState1: false,
		modalState2: false
	},
	reducers: {
		openCloseModal1: (state, action) => {
			state.modalState1 = action.payload;
		},
		openCloseModal2: (state, action) => {
			state.modalState2 = action.payload;
		},
	}
})

export const { openCloseModal1, openCloseModal2 } = baseSlice.actions;

export default baseSlice.reducer;