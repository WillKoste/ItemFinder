import {GET_REVIEWS, REVIEWS_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getReviews = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/reviews`);
		dispatch({
			type: GET_REVIEWS,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: REVIEWS_ERROR,
			payload: err
		});
	}
};
