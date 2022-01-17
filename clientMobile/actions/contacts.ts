import {GET_CONTACTS, CONTACTS_ERROR} from './types';
import customAxios from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {Contact} from '../types/redux';

export const getContacts =
	(originId: number, limit: number = 10, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{contacts: Contact[]}> = await customAxios.get(`/api/v1/contacts?limit=${limit}&offset=${offset}&originId=${originId}`);
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
