import {REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, AUTH_ERROR, GET_CURRENT_USER} from '../actions/types';
import {UserReducer} from '../types/redux';

const initialState: UserReducer = {
	isAuthenticated: null,
	loading: true,
	user: null,
	error: null
};

export default function (state = initialState, action: any): UserReducer {
	const {type, payload} = action;

	switch (type) {
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
		case GET_CURRENT_USER:
			return {
				...state,
				loading: false,
				user: payload,
				isAuthenticated: true
			};
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case AUTH_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
				isAuthenticated: null
			};
		default:
			return state;
	}
}
