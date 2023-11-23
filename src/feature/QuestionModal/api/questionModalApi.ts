import { baseApi } from "shared/api/baseApi"
import { AddQuestion } from "../model/types"
import { IQuestion } from "shared/types/IQuestions"

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
