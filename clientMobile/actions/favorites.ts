import {GET_FAVORITES, FAVORITES_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getFavorites = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/favorites`);
		dispatch({
			type: GET_FAVORITES,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: FAVORITES_ERROR,
			payload: err
		});
	}
};
