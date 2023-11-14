import { baseApi } from 'shared/api/baseApi';
// import { UserAuthData, UserAuthRes } from '../model/types';
export interface UserAuthData {
	email: string;
	password: string;
}

export interface UserAuthRes {
	jwtToken: string
	email: string
	id: number
}

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		auth: builder.mutation<UserAuthRes, UserAuthData>({
			query: (userData) => ({
				url: '/auth/jwt',
				method: 'POST',
				body: { ...userData },
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useAuthMutation } = authApi
