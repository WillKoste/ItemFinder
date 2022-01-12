import {GET_PRODUCTS, PRODUCTS_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getProducts = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/products`);
		dispatch({
			type: GET_PRODUCTS,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PRODUCTS_ERROR,
			payload: err
		});
	}
};
