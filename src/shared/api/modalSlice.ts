import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";


const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modalState1: false,
		modalState2: false
	},
	reducers: {
		openCloseModal1: (state, action: PayloadAction<boolean>) => {
			state.modalState1 = action.payload;
		},
		openCloseModal2: (state, action: PayloadAction<boolean>) => {
			state.modalState2 = action.payload;
		},
	}
})

export const { openCloseModal1, openCloseModal2 } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const modalState2 = (state: RootState) => state.modal.modalState2
export const modalState1 = (state: RootState) => state.modal.modalState1
