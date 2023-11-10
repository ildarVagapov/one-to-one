export interface ITechnology {
	id?: number;
	name: string;
}
export interface ITechnologyResponse {
	totalItems: number;
	items: ITechnology[];
}