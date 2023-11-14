

export interface UserRegistrationData {
	name: string;
	password: string;
	surName: string;
	email: string;
}

export interface UserRegistrationResponse {
	id: number
	name: string
	password: string
	surName: string
	email: string
	status: string
}