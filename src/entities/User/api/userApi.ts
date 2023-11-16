import { baseApi } from "shared/api/baseApi";
import { userData } from "shared/types/user";


const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserId: builder.query<userData, string | null>({
			query: (id) => `/user/${id}`,
		})
	})
})

export const { useGetUserIdQuery } = userApi