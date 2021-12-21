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

export interface ProductHistory {
	id: number;
	product_id: number;
	partner_id: number;
	price?: number;
	created_at?: string;
}

export interface Location {
	id: number;
	partnerId: number;
	image?: string;
	address?: string;
	rating?: number;
}

export interface Partner {
	id: number;
	name: string;
	partnerCode: string;
}

export interface Contact {
	id?: number;
	name?: string;
	firstName?: string;
	lastName?: string;
	address?: string;
	creditCard?: string;
}

export interface Review {
	id: number;
	title: string;
	body: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface UserReducer {
	user: User | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	error: any;
	success?: boolean | null;
}

export interface ProductsReducer {
	products: Product[] | [];
	product: Product | null;
	loading: boolean;
	error: any;
	success?: boolean | null;
}

export interface ProductsHistoryReducer {
	productsHistory: ProductHistory[] | [];
	productHistory: Product | null;
	loadingHistory: boolean;
	error: any;
	success: boolean | null;
}

export interface LocationsReducer {
	locations: Location | [];
	location: Location | null;
	loading: boolean;
	error: any;
	success?: boolean | null;
}

export interface PartnersReducer {
	partners: Partner[] | [];
	partner: Partner | null;
	loadingPartners: boolean;
	loadingPartner: boolean;
	error: any;
	success?: boolean | null;
}

export interface ContactsReducer {
	contacts: Contact[];
	contact: Contact | null;
	loadingContacts: boolean;
	loadingContact: boolean;
	error: any;
	success?: boolean | null;
}

export interface ReviewsReducer {
	reviews: Review[];
	review: Review | null;
	loadingReviews: boolean;
	loadingReview: boolean;
	error: any;
}

export interface RootRedTypes {
	authRed?: UserReducer;
	productsRed?: ProductsReducer;
	locationsRed?: LocationsReducer;
	partnersRed?: PartnersReducer;
	contactsRed?: ContactsReducer;
}

export interface AuthFormDataTypes {
	email?: string | undefined;
	password?: string | undefined;
	password2?: string | undefined;
	phone?: string | undefined;
}
