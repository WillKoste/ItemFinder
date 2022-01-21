import 'express-session';
import {Product, User} from './routes';

declare module 'express-session' {
	interface Session {
		userId: number;
	}
}

export interface UserResponse {
	success: boolean;
	data?: string;
	users?: User[];
	user?: User;
	count: number;
}

export interface ProductResponse {
	success: boolean;
	data?: string;
	products?: Product[];
	product?: Product;
	count?: number;
}

export interface LocationReqBody {
	name: string;
	image: string;
	address: string;
	rating: number;
}

declare global {
	namespace Express {
		interface Request {
			isAdmin?: boolean | undefined;
			isPartner?: boolean | undefined;
			isPremium?: boolean | undefined;
			user?: User;
			searchQuery?: string | undefined;
			queryArray?: any[];
			passedAuth?: boolean | null | undefined;
		}
	}
}
