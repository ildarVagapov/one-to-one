
export interface IFeedbackCreate {
	oneToOneId: number
	authorId: number
	recipientId: number
	questions: IFeedbackQuestionItems[]
	message: string
}

export interface IFeedbackQuestionItems {
	question: IFeedbackQuestionItem
	responseLevel: number
	comment: string
}

export interface IFeedbackQuestionItem {
	id: number | undefined
	question: string
	answer: string
	technologyId: number | undefined
	userId: number
}

export interface IFeedbackResponse {
	id: number
	oneToOneId: number
	authorId: number
	recipientId: number
	questions: IFeedbackResponseItem[]
	message: string
}

export interface IFeedbackResponseItem {
	question: string
	answer: string
	technology: string
	responseLevel: string
	comment: string
}
