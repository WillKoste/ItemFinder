import {GET_CONTACTS, CONTACTS_ERROR, CONTACTS_CLEAR} from '../actions/types';
import {Action, ContactsReducer} from '../types/redux';

const initialState: ContactsReducer = {
	contacts: [],
	contact: null,
	loadingContacts: true,
	loadingContact: true,
	success: null,
	error: null
};

export default function (state = initialState, action: Action) {
	const {payload, type} = action;
	switch (type) {
		case GET_CONTACTS:
			return {
				...state,
				loadingContacts: false,
				error: null,
				success: true,
				contacts: payload
			};
		case CONTACTS_ERROR:
			return {
				...state,
				contacts: [],
				contact: null,
				error: payload,
				success: false,
				loadingContacts: false,
				loadingContact: false
			};
		case CONTACTS_CLEAR:
			return {
				...state,
				contacts: [],
				contact: null
			};
		default:
			return state;
	}
}
