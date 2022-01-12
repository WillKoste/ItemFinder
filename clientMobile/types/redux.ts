export interface Dispatch {
	type: string;
	payload: any;
}

export interface Action {
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

export interface Product {
	id: number;
	name: string;
	sku: string;
	category?: string;
	description?: string;
	rating?: number;
	image?: string;
	price?: number;
	qty?: number;
}

export interface UserReducer {
	user: User | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	error: any;
}

export interface ProductsReducer {
	products: Product[];
	product: Product | null;
	loading: boolean;
	error: any;
}

export interface RootRedTypes {
	authRed?: UserReducer;
}
