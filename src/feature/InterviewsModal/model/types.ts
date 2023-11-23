import { ITechnology } from "shared/types/ITechnology";

export interface ICreateInterview {
	technologyId: number | undefined;
	dateTime: string | undefined;
	levelId: number | undefined;
	comment: string;
	initiatorId: number | undefined;
}

export interface FormData {
	date: string
	technology: ITechnology[]
	time: string
	level: ILevel[]
}


export interface ILevel {
	id: number
	level: string
}