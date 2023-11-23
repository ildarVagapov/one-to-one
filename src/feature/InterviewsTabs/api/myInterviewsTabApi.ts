import { baseApi } from "shared/api/baseApi";
import { IItems } from "shared/types/IItems";


const myInterviewsTabApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMyInterviewsTabInfo: builder.query<IItems, number>({
			query: (id) => `/one-to-one?search=initiator.id:${id}`
		})
	})
})

export const { useGetMyInterviewsTabInfoQuery } = myInterviewsTabApi