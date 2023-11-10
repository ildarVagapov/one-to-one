import { baseApi } from 'shared/api/baseApi';
import { ITechnologyResponse } from '../model/types';


export const stackApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		stack: builder.query<ITechnologyResponse, void>({
			query: () => `technology?size=1500`,
		}),
	}),
	overrideExisting: false,
})


export const { useStackQuery } = stackApi
