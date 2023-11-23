import { IQuestion } from "shared/types/IQuestions";
import { ITechnology } from "shared/types/ITechnology";

export type AddQuestion = {
	userId: number | undefined;
	questions: IQuestion[];
};

export interface FormDataQuestion {
	question: string;
	answer: string,
	technology: ITechnology
}