import axios, {AxiosResponse} from 'axios';
import {Review} from '../types/general';
import {GET_REVIEWS, GET_REVIEW, REVIEWS_CLEAR, REVIEWS_ERROR, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW} from './types';

export const getReviews = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{reviews: Review[]}> = await axios.get('/api/v1/reviews');
		dispatch({
			type: GET_REVIEWS,
			payload: res.data.reviews
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: REVIEWS_ERROR,
			payload: err
		});
	}
};
