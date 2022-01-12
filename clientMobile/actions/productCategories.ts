import {GET_CATEGORIES, CATEGORIES_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getCategories =
	(limit: number, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res = await customAxios.get(`/api/v1/categories?limit=${limit}&offset=${offset}`);
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: CATEGORIES_ERROR,
				payload: err
			});
		}
	};
