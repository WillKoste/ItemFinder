import {ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITES, GET_FAVORITE, CLEAR_FAVORITE, FAVORITES_ERROR, LOGOUT} from '../actions/types';
import {Action, FavoritesReducer} from '../types/redux';

const initialState: FavoritesReducer = {
	favorites: [],
	favorite: null,
	loadingFavorites: true,
	error: null,
	success: null
};

export default function (state = initialState, action: Action) {
	const {type, payload} = action;
	switch (type) {
		case GET_FAVORITES:
			return {
				...state,
				favorites: payload,
				loadingFavorites: false,
				error: null,
				success: true
			};
		case GET_FAVORITE:
			return {
				...state,
				favorite: payload,
				loadingFavorites: false,
				error: null,
				success: true
			};
		case ADD_FAVORITE:
		case REMOVE_FAVORITE:
			return {
				...state,
				loadingFavorites: false,
				error: null,
				success: true
			};
		case FAVORITES_ERROR:
			return {
				...state,
				loadingFavorites: false,
				favorites: [],
				favorite: null,
				success: false,
				error: payload
			};
		case CLEAR_FAVORITE:
		case LOGOUT:
			return {
				...state,
				favorites: [],
				favorite: null
			};
		default:
			return state;
	}
}
