import {GET_CONTACTS, CONTACTS_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getContacts = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/contacts`);
		dispatch({
			type: GET_CONTACTS,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: CONTACTS_ERROR,
			payload: err
		});
	}
};
