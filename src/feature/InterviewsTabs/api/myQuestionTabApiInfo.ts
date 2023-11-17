import { baseApi } from "shared/api/baseApi";

interface MyQuestionType {
	totalItems: number
	items: Item[]
}

interface Item {
	id: number
	question: string
	answer: string
	technology: Technology
	userId: number
}

interface Technology {
	id: number
	name: string
}


const myQuestionTabApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMyQuestionTabInfo: builder.query<MyQuestionType, number>({
			query: (userId) => `/user/${userId}/question`
		})
	})
})

export const { useGetMyQuestionTabInfoQuery } = myQuestionTabApi