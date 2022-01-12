import {PURCHASES_ERROR, ADD_PURCHASE, GET_PURCHASE, GET_PURCHASES, CLEAR_PURCHASE, REMOVE_PURCHASE} from '../actions/types';
import {PurchasesReducer} from '../types/general';
import {Action} from '../types/redux';

const initialState: PurchasesReducer = {
	purchases: [],
	purchase: null,
	loadingPurchases: true,
	loadingPurchase: true,
	error: null,
	success: null
};

export default function (state = initialState, action: Action) {
	const {type, payload} = action;
	switch (type) {
		case GET_PURCHASES:
			return {
				...state,
				purchases: payload,
				loadingPurchases: false,
				error: null,
				success: true
			};
		case GET_PURCHASE:
			return {
				...state,
				purchase: payload,
				loadingPurchase: false,
				error: null,
				success: true
			};
		case ADD_PURCHASE:
			return {
				...state,
				success: true,
				error: null,
				purchase: payload
			};
		case PURCHASES_ERROR:
			return {
				...state,
				purchases: [],
				purchase: null,
				loadingPurchases: false,
				loadingPurchase: false,
				success: false,
				error: payload
			};
		case CLEAR_PURCHASE:
			return {
				...state,
				purchases: [],
				purchase: null,
				loadingPurchases: true,
				loadingPurchase: true,
				error: null,
				success: null
			};
		default:
			return state;
	}
}
