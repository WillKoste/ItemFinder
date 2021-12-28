import {AxiosResponse} from 'axios';
import {customAxios} from '../utils/customAxios';
import {GET_CATEGORIES, CATEGORIES_ERROR} from './types';

export const getCategories =
	(limit: number, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{categories: string[]}> = await customAxios.get(`/api/v1/categories?limit=${limit}&offset=${offset}`);
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data.categories
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: CATEGORIES_ERROR,
				payload: err
			});
		}
	};

// export const setCategory = (cat: string) => async dispatch => {
// 	dispatch({})
// }
