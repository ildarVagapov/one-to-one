import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";

interface AccordionState {
	[accordionId: string]: boolean;
}

const accordionSlice = createSlice({
	name: 'accordion',
	initialState: {} as AccordionState,
	reducers: {
		setOpenAccordion: (state, action: PayloadAction<{ accordionId: string; isOpen: boolean }>) => {
			const { accordionId, isOpen } = action.payload;
			state[accordionId] = isOpen;
		},
	}
})

export const { setOpenAccordion } = accordionSlice.actions;
export const accordionReducer = accordionSlice.reducer;

export const accordionState = (state: RootState, accordionId: string) => state.accordion[accordionId] || false;

