export interface User {
	id: number;
	email: string;
	phone: string;
	image?: string;
	is_premium?: boolean;
	is_partner?: boolean;
	is_admin?: boolean;
	password: string;
	partner_code?: string;
}

export interface Product {
	id: number;
	name: string;
	sku?: string;
	category?: string;
	description: string;
	rating?: number;
	image?: string;
	price?: number;
	qty?: string;
}

export interface Location {
	id: number;
	partnerId: number;
	image?: string;
	address?: string;
	rating?: number;
}

export interface Contact {
	id: number;
	firstName?: string;
	middleInitial?: string;
	lastName?: string;
	phone?: string;
	email?: string;
	relation?: string;
	streetAddress?: string;
	city?: string;
	state?: string;
	zip?: string;
	companyName?: string;
	companyTitle?: string;
	companyMemberType?: string;
	companyStreetAddress?: string;
	companyCity?: string;
	companyState?: string;
	companyZip?: string;
	contactType?: string;
}

export interface Review {
	id: number;
	title: string;
	body: string;
}

export interface ProductHistoryResponse {
	id: number;
	productId: number;
	partnerId: number;
	price: number;
	rating: number;
	recorded_on: string;
}
