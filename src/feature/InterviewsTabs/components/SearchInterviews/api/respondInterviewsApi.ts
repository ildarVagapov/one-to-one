import { baseApi } from "shared/api/baseApi";
import { IItems } from "shared/types/IItems";


interface IInterviewsRespond {
	opponentId: number
	oneToOneId: number
}

const respondInterviewsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		respondInterviews: builder.mutation<IItems, IInterviewsRespond>({
			query: (body) => ({
				url: `/one-to-one`,
				method: 'PUT',
				body,
			}),
		})
	})
})

export const { useRespondInterviewsMutation } = respondInterviewsApi