import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";


const accordionSlice = createSlice({
	name: 'accordion',
	initialState: {
		accordionState: false
	},
	reducers: {
		setOpenAccordion: (state, action: PayloadAction<boolean>) => {
			state.accordionState = action.payload;
		},
	}
})

export const { setOpenAccordion } = accordionSlice.actions;
export const accordionReducer = accordionSlice.reducer;

export const accordionState = (state: RootState) => state.accordion.accordionState
