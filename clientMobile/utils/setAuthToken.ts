import customAxios from './customAxios';

export const checkAuthToken = (token: string | null) => {
	if (token) {
		customAxios.defaults.headers.common['x-auth-token'] = token;
	} else {
		delete customAxios.defaults.headers.common['x-auth-token'];
	}
};
