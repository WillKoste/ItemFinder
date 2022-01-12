import {GET_PARTNERS, PARTNERS_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getPartners = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/partners`);
		dispatch({
			type: GET_PARTNERS,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PARTNERS_ERROR,
			payload: err
		});
	}
};
