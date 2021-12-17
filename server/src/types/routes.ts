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
	firstName: string;
	lastName: string;
	address: string;
	creditCard?: string;
	contactType: string;
}

export interface Review {
	id: number;
	title: string;
	body: string;
}
