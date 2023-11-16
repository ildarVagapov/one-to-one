import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi'
import { modalReducer } from './modalSlice'
import { userIdReducer } from './userIdSlice'


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		modal: modalReducer,
		userId: userIdReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState> 