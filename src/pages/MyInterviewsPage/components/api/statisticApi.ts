import { baseApi } from "shared/api/baseApi";
import { User } from "shared/types/user";

interface StatisticData {
	id: number
	user: User
	totalOneToOneCount: number
	totalQuestionCount: number
	totalPoint: number
}


const statisticApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getStatistic: builder.query<StatisticData, number>({
			query: (id) => `/statistics/${id}`
		})
	})
})

export const { useGetStatisticQuery } = statisticApi