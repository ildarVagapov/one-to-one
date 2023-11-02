export interface IInterviewItem {
	id: number;
	initiatorId: number;
	opponentId: number | null;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	status: string;
	comment: string;
	level: string;
}
export interface ICreateInterview {
	technologyId: number | undefined;
	dateTime: string | undefined;
	levelId: number | undefined;
	comment: string;
	initiatorId: number | undefined;
}