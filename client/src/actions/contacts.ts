import axios, {AxiosResponse} from 'axios';
import {Contact} from '../types/general';
import {GET_CONTACTS, GET_CONTACT, CONTACTS_CLEAR, CONTACTS_ERROR, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, CREATE_REVIEW} from './types';

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

export const getContact = (contactId: string) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{contact: Contact}> = await axios.get(`/api/v1/contacts/${contactId}`);
		dispatch({
			type: GET_CONTACT,
			payload: res.data.contact
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: CONTACTS_ERROR,
			payload: err
		});
	}
};

export const createContact = (formData: Contact) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);

	try {
		const res: AxiosResponse<{contact: Contact}> = await axios.post(`/api/v1/contacts`, body, config);
		dispatch({
			type: CREATE_REVIEW,
			payload: res.data.contact
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: CONTACTS_ERROR,
			payload: err
		});
	}
};

export const updateContact = (formData: Contact) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);
	try {
		const res: AxiosResponse<{contact: Contact}> = await axios.put(`/api/v1/contacts/${formData.id}`, body, config);
		dispatch({
			type: UPDATE_CONTACT,
			payload: res.data.contact
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: CONTACTS_ERROR,
			payload: err
		});
	}
};

export const deleteContact = (contactId: string) => async (dispatch: any) => {
	try {
		const res = await axios.delete(`/api/v1/contacts/${contactId}`);
	} catch (err) {
		console.error(err);
	}
};
