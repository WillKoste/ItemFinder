export interface Dispatch {
	type: string;
	payload: any;
}

export interface User {
	id: number;
	email: string;
	phone?: string;
	image: string;
	is_premium?: boolean;
	is_partner?: boolean;
	is_admin?: boolean;
	partner_code?: string | null;
}

export interface UserReducer {
	user: User | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	error: any;
}
