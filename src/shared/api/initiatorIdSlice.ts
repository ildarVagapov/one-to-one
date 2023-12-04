import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";



interface initiatorState {
	initiatorId: number
	date: string
	name: string
}

// const initialState: initiatorState = {
// 	initiatorId: 0,
// 	date: '',
// 	name: ''
// }

const initiatorSlice = createSlice({
	name: 'initiatorId',
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
