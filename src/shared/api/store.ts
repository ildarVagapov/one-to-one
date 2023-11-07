import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi'
import baseSlice from './baseSlice'


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		baseSlice: baseSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})