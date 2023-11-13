import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi'
import modalReducer from './modalSlice'


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		modalSlice: modalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>