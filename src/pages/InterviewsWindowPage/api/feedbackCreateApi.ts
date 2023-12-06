import { baseApi } from "shared/api/baseApi";
import { IFeedbackCreate, IFeedbackResponse } from "shared/types/IFeedback";


const sendFeedbackCreateApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		sendFeedbackCreate: builder.mutation<IFeedbackResponse, IFeedbackCreate>({
			query: (data) => ({
				url: `/user/one-to-one/feedback/create`,
				method: 'POST',
				body: data,
			})
		})
	})
})

export const { useSendFeedbackCreateMutation } = sendFeedbackCreateApi