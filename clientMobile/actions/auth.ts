import customAxios from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {User} from '../types/redux';
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, GET_CURRENT_USER} from './types';
import {AuthDataProps} from '../types/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {SESSION_NAME} from '../utils/constants';
// import {saveSession} from '../utils/sessionUtils';

const saveSession = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.log(err);
	}
};

export const getCurrentUser = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{user: User}> = await customAxios.get('/api/v1/users/me');
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
		const res: AxiosResponse<{user: User; session: string}> = await customAxios.post('/api/v1/users/login', body, config);
		console.log({res});
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data.user
		});
		// saveSession(SESSION_NAME, res.data.session);
	} catch (err: any) {
		console.error(err);
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

	try {
		const res: AxiosResponse<{user: User; session: string}> = await customAxios.post('/api/v1/users/register', body, config);
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
