import { baseApi } from "shared/api/baseApi"
import { ICreateInterview } from "../model/types"
import { IItem } from "shared/types/IItems"

const interviewsModalApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createInterview: builder.mutation<IItem, ICreateInterview>({
			query: (data) => ({
				url: `/one-to-one`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useCreateInterviewMutation } = interviewsModalApi
