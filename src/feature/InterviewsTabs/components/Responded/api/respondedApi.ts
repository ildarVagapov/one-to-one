import { baseApi } from "shared/api/baseApi";
import { IItems } from "shared/types/IItems";


const respondedApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getRespondedInfo: builder.query<IItems, number>({
			query: (id) => `/one-to-one?search=opponent.id:${id}`
		})
	})
})

export const { useGetRespondedInfoQuery } = respondedApi