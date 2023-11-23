import { baseApi } from "shared/api/baseApi";
import { IUser } from "shared/types/IUser";


const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserId: builder.query<IUser, string | null | number[] | undefined>({
			query: (id) => `/user/${id}`,
		})
	})
})

export const { useGetUserIdQuery } = userApi