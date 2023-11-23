import { baseApi } from "shared/api/baseApi";
import { IItems } from "shared/types/IItems";


const searchInterviewsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSearchInterviews: builder.query<IItems, void>({
			query: () => `/one-to-one?size=50&search=status:OPEN`
		})
	})
})

export const { useGetSearchInterviewsQuery } = searchInterviewsApi