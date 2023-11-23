import { ITechnology } from "shared/types/ITechnology";

export interface ITechnologyResponse {
	totalItems: number;
	items: ITechnology[];
}