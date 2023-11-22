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


const myInterviewsTabApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMyInterviewsTabInfo: builder.query<MyInterviewsType, number>({
			query: (id) => `/one-to-one/user/${id}`
		})
	})
})

export const { useGetMyInterviewsTabInfoQuery } = myInterviewsTabApi