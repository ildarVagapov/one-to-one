import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
	reducer: {
		[.reducerPath]: .reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(.middleware),
})