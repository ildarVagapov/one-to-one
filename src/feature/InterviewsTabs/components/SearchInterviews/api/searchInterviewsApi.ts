import { baseApi } from "shared/api/baseApi";

interface MyInterviewsType {
	totalItems: number
	items: Item[]
}

interface Item {
	id: number
	initiatorId: number
	opponentId: number
	technology: Technology
	dateTime: string
	initiatorFeedback: string
	opponentFeedback: string
	level: string
	status: string
	comment: string
}

interface Technology {
	id: number
	name: string
}

const searchInterviewsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSearchInterviews: builder.query<MyInterviewsType, void>({
			query: () => `/one-to-one?size=50&search=status:OPEN`
		})
	})
})

export const { useGetSearchInterviewsQuery } = searchInterviewsApi