import {LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, AUTH_ERROR, GET_CURRENT_USER, LOGOUT} from '../actions/types';
import {UserReducer} from '../types/general';

const inititalState = {
	user: null,
	isAuthenticated: null,
	loading: true,
	error: null
};

export default function (state = inititalState, action: any): UserReducer {
	const {payload, type} = action;

	switch (type) {
		case LOGIN_SUCCESS:
		case GET_CURRENT_USER:
		case REGISTER_SUCCESS:
			return {
				...state,
				user: payload,
				loading: false
			};
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: null,
				loading: false,
				error: payload
			};
		default:
			return state;
	}
}
