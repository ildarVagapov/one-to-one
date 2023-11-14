
export interface UserAuthData {
	email: string;
	password: string;
}

export interface UserAuthRes {
	jwtToken: string
	email: string
	id: number
}