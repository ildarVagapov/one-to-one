import { configureStore } from '@reduxjs/toolkit'
import { registrationApi } from 'pages/RegistrationPage/api/registrationApi'


export const store = configureStore({
	reducer: {
		[registrationApi.reducerPath]: registrationApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(registrationApi.middleware),
})