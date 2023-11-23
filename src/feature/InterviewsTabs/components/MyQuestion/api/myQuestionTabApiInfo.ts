import { baseApi } from "shared/api/baseApi";
import { IQuestions } from "shared/types/IQuestions";


const myQuestionTabApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMyQuestionTabInfo: builder.query<IQuestions, number>({
			query: (userId) => `/user/${userId}/question`
		})
	})
})

export const { useGetMyQuestionTabInfoQuery } = myQuestionTabApi