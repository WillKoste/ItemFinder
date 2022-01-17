import customAxios from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {User} from '../types/redux';
import {getSessionToken, saveSession} from '../utils/sessionUtils';
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, GET_CURRENT_USER} from './types';
import {AuthDataProps} from '../types/general';
import {SESSION_NAME} from '../utils/constants';
import {checkAuthToken} from '../utils/setAuthToken';

export const getCurrentUser = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{user: User}> = await customAxios.get('/api/v1/users/mobile/me');
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

export const login = (formData: AuthDataProps) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);
	console.log('LOGIN ACTION IS RUNNING');

	try {
		const res: AxiosResponse<{token: string}> = await customAxios.post('/api/v1/users/mobile/login', body, config);
		// console.log({res});
		// saveSession(SESSION_NAME, res.data.token);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data.token
		});
	} catch (err: any) {
		console.error({err});
		console.log('couldnt do it sorry');
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response
		});
	}
};

export const register = (formData: any) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);
	dispatch;
	console.log('tf');

	try {
		const res: AxiosResponse<{user: User; session: string}> = await customAxios.post('/api/v1/users/mobile/register', body, config);
		console.log({res});
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
	dispatch({
		type: LOGOUT
	});
};
