import { baseApi } from "shared/api/baseApi";

interface userDataRes {
	id: number,
	email: string,
	name: string,
	surName: string,
	status: string

}

const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserId: builder.query<userDataRes, string | null>({
			query: (id) => `/user/${id}`,
		})
	})
})

export const { useGetUserIdQuery } = userApi