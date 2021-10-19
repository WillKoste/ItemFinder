import {GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCTS, GET_PRODUCTS_FAIL, CREATE_PRODUCT, DELETE_PRODUCT} from '../actions/types';
import {ProductsReducer} from '../types/redux';

const initialState: ProductsReducer = {
	products: [],
	product: null,
	loading: true,
	error: null
};

export default function (state = initialState, action: any): ProductsReducer {
	const {payload, type} = action;

	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
				loading: false
			};
		case GET_PRODUCT:
			return {
				...state,
				loading: false,
				product: payload
			};
		case GET_PRODUCTS_FAIL:
			return {
				...state,
				products: [],
				loading: false,
				error: payload
			};
		case GET_PRODUCT_FAIL:
			return {
				...state,
				loading: false,
				product: null
			};
		default:
			return state;
	}
}
