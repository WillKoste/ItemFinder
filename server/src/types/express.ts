import 'express-session';
import {User} from './routes';

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
