import {CATEGORIES_ERROR, GET_CATEGORIES} from '../actions/types';
import {CategoryReducer} from '../types/general';
import {Action} from '../types/redux';

const inititalState: CategoryReducer = {
	categories: [],
	loadingCategories: true,
	error: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload} = action;
	switch (type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: payload,
				loadingCategories: false,
				error: null
			};
		case CATEGORIES_ERROR:
			return {
				...state,
				categories: [],
				loadingCategories: false,
				error: payload
			};
		default:
			return state;
	}
}
