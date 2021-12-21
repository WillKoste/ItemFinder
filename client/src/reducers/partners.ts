import {GET_PARTNERS, GET_PARTNER, CREATE_PARTNER, UPDATE_PARTNER, DELETE_PARTNER, PARTNERS_ERROR} from '../actions/types';
import {PartnersReducer} from '../types/general';
import {Action} from '../types/redux';

const initialState: PartnersReducer = {
	partners: [],
	partner: null,
	error: null,
	loadingPartners: true,
	loadingPartner: true
};

export default function (state = initialState, action: Action) {
	const {type, payload} = action;

	switch (type) {
		case GET_PARTNERS:
			console.log({payload});
			return {
				...state,
				partners: payload,
				loadingPartners: false,
				error: null
			};
		case GET_PARTNER:
			return {
				...state,
				partner: payload,
				loadingPartner: false,
				error: null
			};
		case CREATE_PARTNER:
			return {
				...state,
				error: null,
				loadingPartner: false
			};
		case UPDATE_PARTNER:
			return {
				...state,
				error: null,
				loadingPartner: false
			};
		case DELETE_PARTNER:
			return {
				...state,
				error: null,
				loadingPartner: false
			};
		case PARTNERS_ERROR:
			return {
				...state,
				loadingPartner: false,
				error: payload
			};
		default:
			return state;
	}
}
