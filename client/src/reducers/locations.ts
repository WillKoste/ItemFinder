import {GET_LOCATIONS, GET_LOCATION, CREATE_LOCATION, UPDATE_LOCATION, DELETE_LOCATION, LOCATIONS_CLEAR, LOCATIONS_ERROR} from '../actions/types';
import {LocationsReducer} from '../types/general';
import {Action} from '../types/redux';

const inititalState: LocationsReducer = {
	locations: [],
	location: null,
	loading: true,
	error: null
};

export default function (state = inititalState, action: Action) {
	const {payload, type} = action;

	switch (type) {
		case GET_LOCATIONS:
			return {
				...state,
				loading: false,
				locations: payload,
				error: null
			};
		case GET_LOCATION:
			return {
				...state,
				loading: false,
				location: payload,
				error: null
			};
		case CREATE_LOCATION:
		case DELETE_LOCATION:
		case UPDATE_LOCATION:
			return {
				...state,
				error: null,
				loading: false
			};
		case LOCATIONS_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
				locations: [],
				location: null
			};
		case LOCATIONS_CLEAR:
			return {
				...state,
				locations: [],
				location: null
			};
		default:
			return state;
	}
}
