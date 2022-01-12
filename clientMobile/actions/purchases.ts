import {GET_PURCHASES, PURCHASES_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getPurchases = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/purchases`);
		dispatch({
			type: GET_PURCHASES,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PURCHASES_ERROR,
			payload: err
		});
	}
};
