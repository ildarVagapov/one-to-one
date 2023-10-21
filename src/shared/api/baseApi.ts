import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'http://158.160.83.38:8080/one-to-one/api/v1/' }),
	endpoints: () => ({})
})