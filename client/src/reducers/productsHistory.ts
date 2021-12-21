import {GET_ALL_PRODUCTS_HISTORY, GET_SINGLE_PRODUCTS_HISTORY, PRODUCTS_HISTORY_CLEAR, GET_PRODUCTS_HISTORY_ERROR} from '../actions/types';
import {ProductsHistoryReducer} from '../types/general';
import {Action} from '../types/redux';

const inititalState: ProductsHistoryReducer = {
	productsHistory: [],
	productHistory: null,
	loadingHistory: true,
	success: null,
	error: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload} = action;

	switch (type) {
		case GET_ALL_PRODUCTS_HISTORY:
			return {
				...state
			};
		default:
			return state;
	}
}
