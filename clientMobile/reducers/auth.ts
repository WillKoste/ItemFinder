import {REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, AUTH_ERROR, GET_CURRENT_USER} from '../actions/types';
import {Action, UserReducer} from '../types/redux';

const initialState: UserReducer = {
	isAuthenticated: null,
	loading: true,
	token: null,
	user: null,
	error: null
};

export default function (state = initialState, action: Action) {
	const {type, payload} = action;

	switch (type) {
		case GET_CURRENT_USER:
			return {
				...state,
				loading: false,
				user: payload,
				isAuthenticated: true,
				error: null
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				token: payload,
				isAuthenticated: true,
				error: null
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
				error: payload,
				token: null
			};
		default:
			return state;
	}
}
