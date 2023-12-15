import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { IQuestion } from "shared/types/IQuestions";

interface ISetQuestion {
	questions: IQuestion[]
}

const initialState: ISetQuestion = {
	questions: []
}

const setQuestionSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setQuestion: (state, action: PayloadAction<IQuestion>) => {
			state.questions.push(action.payload)
		},
		removeQuestion: (state, action: PayloadAction<number | undefined>) => {
			state.questions = state.questions.filter((queston) => queston.id !== action.payload)
		}
	}
})

export const { setQuestion, removeQuestion } = setQuestionSlice.actions
export const setQuestionReducer = setQuestionSlice.reducer
export const questionsInterviewsWindow = (state: RootState) => state.questionsInterviewsWindow.questions
