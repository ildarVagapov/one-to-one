
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// interface User {
// 	// Определите поля пользователя, которые вернутся от сервера
// }

interface UserRegistrationData {
	username: string;
	password: string;
	lastname: string;
	email: string;
}

export const registrationApi = createApi({
	reducerPath: 'registrationApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://158.160.83.38:8080/one-to-one/api/v1/' }),
	endpoints: (builder) => ({
		registration: builder.mutation<any, UserRegistrationData>({
			query: (userData) => ({
				url: '/user/register',
				method: 'POST',
				body: userData,
			}),
		}),
	}),
})

export const { useRegistrationMutation } = registrationApi