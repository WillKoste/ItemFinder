import axios, {AxiosResponse} from 'axios';
import {Contact} from '../types/general';
import {GET_CONTACTS, GET_CONTACT, CONTACTS_CLEAR, CONTACTS_ERROR, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from './types';

export const getContacts = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{contacts: Contact[]}> = await axios.get('/api/v1/contacts');
		dispatch({
			type: GET_CONTACTS,
			payload: res.data.contacts
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: CONTACTS_ERROR,
			payload: err
		});
	}
};
