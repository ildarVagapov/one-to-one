import { ITechnology } from "./ITechnology";

export interface IQuestions {
	totalItems: number
	items: IQuestion[]
}

export interface IQuestion {
	id?: number;
	question: string;
	answer: string;
	technology?: ITechnology
	technologyId?: number | undefined;
	userId: number | undefined;
}