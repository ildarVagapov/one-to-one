import { baseApi } from 'shared/api/baseApi';
import { UserAuthData } from '../model/types';


export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		auth: builder.mutation<any, UserAuthData>({
			query: (userData) => ({
				url: '/auth/jwt',
				method: 'POST',
				body: userData,
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useAuthMutation } = authApi
