import {customAxios} from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {AuthFormDataTypes} from '../types/general';
import {User} from '../types/general';
import {LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, GET_CURRENT_USER, LOGOUT} from './types';
import {clearFavorites} from './favorites';
import {clearCartItems} from './cartItems';

export const getCurrentUser = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{user: User}> = await customAxios.get('/api/v1/users/web/me');
		console.log({CLIENT: res});
		dispatch({
			type: GET_CURRENT_USER,
			payload: res.data.user
		});
	} catch (err: any) {
		console.error(err);
		dispatch({
			type: AUTH_ERROR,
			payload: err.response
		});
	}
};

export const loginUser = (formData: AuthFormDataTypes) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);

	try {
		const res: AxiosResponse<{user: User}> = await customAxios.post('/api/v1/users/web/login', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data.user
		});
	} catch (err: any) {
		console.error(err);
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response
		});
	}
};

export const registerUser = (formData: AuthFormDataTypes) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);

	try {
		const res: AxiosResponse<{user: User}> = await customAxios.post('/api/v1/users/web/register', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data.user
		});
	} catch (err: any) {
		console.error(err);
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response
		});
	}
};

export const logout = () => async (dispatch: any) => {
	try {
		await customAxios.post('/api/v1/users/logout');
		localStorage.removeItem('cart');
		localStorage.removeItem('cartTotal');
		dispatch({
			type: LOGOUT
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: AUTH_ERROR,
			payload: err
		});
	}
};
