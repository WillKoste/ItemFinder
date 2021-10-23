import {customAxios} from './customAxios';

export const setAuthSession = (cookie: string) => {
	if (cookie) {
		customAxios.defaults.headers.common['Set-Cookie'] = cookie;
	} else {
		delete customAxios.defaults.headers.common['Set-Cookie'];
	}
};
