import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '../../shared/api/baseApi'
import { modalReducer } from '../../shared/api/modalSlice'
import { userIdReducer } from '../../shared/api/myIdSlice'
import { accordionReducer } from 'shared/api/accordionSlice'
import { initiatorReducer } from 'shared/api/initiatorIdSlice'


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		modal: modalReducer,
		myId: userIdReducer,
		accordion: accordionReducer,
		initiator: initiatorReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState> 