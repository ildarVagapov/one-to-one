
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
	reducerPath: 'registrationApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://158.160.83.38:8080/one-to-one/api/v1/' }),
	endpoints: (builder) => ({
		registration: builder.mutation<any, any>({
			query: () => ({
				url: '/user/register',
				method: 'POST',
			}),
		}),
	}),
})

// export const { } = pokemonApi