import {ContactsReducer} from '../types/general';
import {Action} from '../types/redux';
import {GET_CONTACTS, GET_CONTACT, CONTACTS_CLEAR, CONTACTS_ERROR, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from '../actions/types';

const inititalState: ContactsReducer = {
	contacts: [],
	contact: null,
	loadingContact: true,
	loadingContacts: true,
	error: null,
	success: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload} = action;
	switch (type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: payload,
				loadingContacts: false,
				error: null,
				success: true
			};
		case GET_CONTACT:
			return {
				...state,
				contact: payload,
				loadingContact: false,
				error: null,
				success: true
			};
		case CONTACTS_ERROR:
			return {
				...state,
				loadingContacts: false,
				loadingContact: false,
				error: payload,
				contacts: [],
				contact: null,
				success: null
			};
		default:
			return state;
	}
}
