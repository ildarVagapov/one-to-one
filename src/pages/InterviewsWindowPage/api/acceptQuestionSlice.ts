import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { IFeedbackQuestionItems } from "shared/types/IFeedback";

interface IAcceptedQuestions {
	questions: IFeedbackQuestionItems[]
}

const initialState: IAcceptedQuestions = {
	questions: []
}

const acceptQuestionSlice = createSlice({
	name: 'acceptQuestion',
	initialState,
	reducers: {

	}
})

export const acceptQuestionReducer = acceptQuestionSlice.reducer
export const acceptQuestion = (state: RootState) => state.acceptQuestion.questions