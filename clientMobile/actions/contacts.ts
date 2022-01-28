import {GET_CONTACTS, CONTACTS_ERROR, CREATE_REVIEW, GET_CONTACT, UPDATE_CONTACT} from './types';
import customAxios from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {Contact} from '../types/redux';
import {NewContactForm} from '../types/form';

export const getContacts =
	(limit: number = 10, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{contacts: Contact[]; total: number}> = await customAxios.get(`/api/v1/contacts?limit=${limit}&offset=${offset}`);
			dispatch({
				type: GET_CONTACTS,
				payload: res.data.contacts,
				total: res.data.total
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
		const res: AxiosResponse<{contact: Contact}> = await customAxios.get(`/api/v1/contacts/${contactId}`);
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

export const createContact = (formData: NewContactForm) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);

	try {
		const res: AxiosResponse<{contact: Contact}> = await customAxios.post(`/api/v1/contacts`, body, config);
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
		const res: AxiosResponse<{contact: Contact}> = await customAxios.put(`/api/v1/contacts/${formData.id}`, body, config);
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
		const res = await customAxios.delete(`/api/v1/contacts/${contactId}`);
	} catch (err) {
		console.error(err);
	}
};
