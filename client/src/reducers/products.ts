import {ProductsReducer} from '../types/general';
import {Action} from '../types/redux';
import {PRODUCTS_ERROR, GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from '../actions/types';

const initialState: ProductsReducer = {
	products: [],
	product: null,
	loading: true,
	loadingProduct: true,
	error: null
};

export default function (state = initialState, action: Action): ProductsReducer {
	const {type, payload} = action;

	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				loading: false,
				products: payload,
				error: null
			};
		case GET_PRODUCT:
			return {
				...state,
				loadingProduct: false,
				product: payload,
				error: null
			};
		case CREATE_PRODUCT:
			return {
				...state,
				loading: false,
				product: payload,
				success: true,
				error: null
			};
		case PRODUCTS_ERROR:
			return {
				...state,
				loading: false,
				product: null,
				products: [],
				error: payload
			};
		default:
			return state;
	}
}
