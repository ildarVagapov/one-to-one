import { ITechnology } from "../components/Stack/model/types";

export type AddQuestion = {
	userId: number | undefined;
	questions: IQuestion[];
};
export interface IQuestion {
	id?: number;
	question: string;
	answer: string;
	technology?: {
		id: number | undefined;
		name: string;
	};
	technologyId: number | undefined;
	userId: number | undefined;
}

export interface FormDataQuestion {
	question: string;
	answer: string,
	technology: ITechnology
}