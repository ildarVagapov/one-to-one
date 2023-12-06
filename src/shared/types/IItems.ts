import { ITechnology } from "./ITechnology"

export interface IItems {
	totalItems: number
	items: IItem[]
}
export interface IItem {
	id: number
	initiatorId: number
	opponentId: number
	technology: ITechnology
	dateTime: string
	initiatorFeedback: string
	opponentFeedback: string
	level: string
	status: string
	comment: string
}




