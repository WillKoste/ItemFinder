import {GET_ALL_PRODUCTS_HISTORY, GET_PRODUCTS_HISTORY_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getProductsHistory = (productId: number) => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/productHistory/all/${productId}`);
		dispatch({
			type: GET_ALL_PRODUCTS_HISTORY,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: GET_PRODUCTS_HISTORY_ERROR,
			payload: err
		});
	}
};
