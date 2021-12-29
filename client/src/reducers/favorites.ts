import {ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITES, GET_FAVORITE, CLEAR_FAVORITE, FAVORITES_ERROR} from '../actions/types';
import {FavoritesReducer} from '../types/general';
import {Action} from '../types/redux';

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
				loadingFavorites: false
			};
		default:
			return state;
	}
}
