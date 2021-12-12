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

export interface Product {
	id: number;
	name: string;
	sku?: string;
	category?: string;
	description?: string;
	rating?: number;
	image?: string;
	price?: number;
	qty?: number;
}

export interface Location {
	id: number;
	partnerId: number;
	image?: string;
	address?: string;
	rating?: number;
}

export interface UserReducer {
	user: User | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	error: any;
}

export interface ProductsReducer {
	products: Product[] | [];
	product: Product | null;
	loading: boolean;
	error: any;
}

export interface LocationsReducer {
	locations: Location | [];
	location: Location | null;
	loading: boolean;
	error: any;
}

export interface RootRedTypes {
	authRed?: UserReducer;
	productsRed?: ProductsReducer;
	locationsRed?: LocationsReducer;
}

export interface AuthFormDataTypes {
	email?: string | undefined;
	password?: string | undefined;
	password2?: string | undefined;
	phone?: string | undefined;
}
