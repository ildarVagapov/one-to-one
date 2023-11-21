import { baseApi } from "shared/api/baseApi"
import { AddQuestion, IQuestion } from "../model/types"

const questionModalApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		addQuestion: builder.mutation<IQuestion, AddQuestion>({
			query: (body) => ({
				url: `/user/${body.userId}/question/create`,
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useAddQuestionMutation } = questionModalApi
