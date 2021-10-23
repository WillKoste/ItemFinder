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

declare global {
	namespace Express {
		interface Request {
			isAdmin?: boolean | undefined;
			isPartner?: boolean | undefined;
			isPremium?: boolean | undefined;
		}
	}
}
