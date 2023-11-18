import { baseApi } from "shared/api/baseApi";
import { User } from "shared/types/user";


const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserId: builder.query<User, string | null | number[] | undefined>({
			query: (id) => `/user/${id}`,
		})
	})
})

export const { useGetUserIdQuery } = userApi