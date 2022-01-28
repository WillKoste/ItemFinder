import {GET_CONTACTS, CONTACTS_ERROR, CONTACTS_CLEAR, CREATE_CONTACT, GET_CONTACT} from '../actions/types';
import {Action, ContactsReducer} from '../types/redux';

const inititalState: ContactsReducer = {
	contacts: [],
	contact: null,
	totalContacts: null,
	loadingContact: true,
	loadingContacts: true,
	error: null,
	success: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload, total} = action;
	switch (type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: payload,
				loadingContacts: false,
				error: null,
				success: true,
				totalContacts: total
			};
		case GET_CONTACT:
			return {
				...state,
				contact: payload,
				loadingContact: false,
				error: null,
				success: true
			};
		case CREATE_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, payload].filter((a, b) => a - b),
				error: null,
				success: true,
				loadingContact: false
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
