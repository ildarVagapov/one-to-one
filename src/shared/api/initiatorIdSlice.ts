import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";



interface initiatorState {
	initiatorId: number
	date: string
	name: string | undefined
	surName: string | undefined
}

const initiatorSlice = createSlice({
	name: 'initiator',
	initialState: {} as initiatorState,
	reducers: {
		setInitiator: (_, action: PayloadAction<initiatorState>) => {
			return action.payload
		}
	}
})

export const { setInitiator } = initiatorSlice.actions
export const initiatorReducer = initiatorSlice.reducer
export const selectInitiatorId = (state: RootState) => state.initiator.initiatorId
export const selectInitiatorDate = (state: RootState) => state.initiator.date
export const selectInitiatorName = (state: RootState) => state.initiator.name
export const selectInitiatorSurName = (state: RootState) => state.initiator.surName
