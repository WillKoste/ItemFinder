import {ADD_CART, REMOVE_CART, CLEAR_CART, SET_CART} from '../actions/types';
import {CartReducer} from '../types/general';
import {Action} from '../types/redux';

const inititalState: CartReducer = {
	items: [],
	total: 0
};

export default function (state = inititalState, action: Action) {
	const {type, payload, total} = action;

	switch (type) {
		case ADD_CART:
		case SET_CART:
			return {
				...state,
				items: payload,
				total
			};
		case REMOVE_CART:
			return {
				...state,
				items: payload,
				total
			};
		case CLEAR_CART:
			return {
				...state,
				items: []
			};
		default:
			return state;
	}
}
