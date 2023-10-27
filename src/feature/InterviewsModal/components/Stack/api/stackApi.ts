import { baseApi } from 'shared/api/baseApi';


export interface ITechnology {
	id?: number;
	name: string;
}
export interface ITechnologyResponse {
	totalItems: number;
	items: ITechnology[];
}

export const stackApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		stack: builder.query<ITechnologyResponse, void>({
			query: () => `technology?size=1500`,
		}),
	}),
	overrideExisting: false,
})


export const { useStackQuery } = stackApi
