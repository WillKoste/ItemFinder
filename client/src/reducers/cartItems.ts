import {ADD_CART, REMOVE_CART} from '../actions/types';
import {Action} from '../types/redux';

const inititalState = {
	items: []
};

export default function (state = inititalState, action: Action) {
	const {type, payload} = action;

	switch (type) {
		case ADD_CART:
			return {
				...state,
				items: payload
			};
		case REMOVE_CART:
			return {
				...state,
				items: payload
			};
		default:
			return state;
	}
}
