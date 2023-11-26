import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '../../shared/api/baseApi'
import { modalReducer } from '../../shared/api/modalSlice'
import { userIdReducer } from '../../shared/api/myIdSlice'


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		modal: modalReducer,
		myId: userIdReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState> 