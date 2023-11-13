import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./store";


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
export default modalSlice.reducer;

export const modalState2 = useSelector((state: RootState) => state.modalSlice.modalState2)
export const modalState1 = useSelector((state: RootState) => state.modalSlice.modalState1)
