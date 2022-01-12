import {GET_PRODUCTS} from '../actions/types';
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
		default:
			return state;
	}
}
