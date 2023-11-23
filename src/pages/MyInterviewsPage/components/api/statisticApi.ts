import { baseApi } from "shared/api/baseApi";
import { IUser } from "shared/types/IUser";

interface StatisticData {
	id: number
	user: IUser
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