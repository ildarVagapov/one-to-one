import { baseApi } from "shared/api/baseApi"
import { ICreateInterview, IInterviewItem } from "../model/types"

const interviewsModalApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createInterview: builder.mutation<IInterviewItem, ICreateInterview>({
			query: (data) => ({
				url: `/one-to-one`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useCreateInterviewMutation } = interviewsModalApi
