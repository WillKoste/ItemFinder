import {GET_PRODUCTS, PRODUCTS_ERROR} from '../actions/types';
import {Action, ProductsReducer} from '../types/redux';

const initialState: ProductsReducer = {
	products: [],
	product: null,
	loading: true,
	error: null
};

export default function (state = initialState, action: Action): ProductsReducer {
	const {payload, type} = action;
	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				loading: false,
				error: null,
				products: payload
			};
		case PRODUCTS_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
				product: null,
				products: []
			};
		default:
			return state;
	}
}
