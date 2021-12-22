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
				...state,
				productsHistory: payload,
				loadingHistory: false,
				success: true,
				error: null
			};
		case GET_SINGLE_PRODUCTS_HISTORY:
			return {
				...state,
				loading: false,
				productHistory: payload,
				success: true,
				error: null
			};
		case GET_PRODUCTS_HISTORY_ERROR:
			return {
				...state,
				productsHistory: [],
				productHistory: null,
				loadingHistory: false,
				err: payload,
				success: false
			};
		case PRODUCTS_HISTORY_CLEAR:
			return {
				...state,
				loadingHistory: false,
				productsHistory: [],
				productHistory: null,
				success: null,
				error: null
			};
		default:
			return state;
	}
}
