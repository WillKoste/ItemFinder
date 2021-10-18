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
