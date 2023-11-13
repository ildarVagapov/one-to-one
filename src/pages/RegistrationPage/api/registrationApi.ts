import { baseApi } from 'shared/api/baseApi';
import { UserRegistrationData } from '../model/types';


export const registrationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		registration: builder.mutation<any, UserRegistrationData>({
			query: (userData) => ({
				url: '/user/register',
				method: 'POST',
				body: { ...userData },
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useRegistrationMutation } = registrationApi
