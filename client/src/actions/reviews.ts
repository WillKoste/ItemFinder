import {AxiosResponse} from 'axios';
import {Review} from '../types/general';
import {customAxios} from '../utils/customAxios';
import {GET_REVIEWS, GET_REVIEW, REVIEWS_CLEAR, REVIEWS_ERROR, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW, GET_PRODUCT_REVIEWS} from './types';

export const getReviews = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{reviews: Review[]}> = await customAxios.get('/api/v1/reviews');
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

export const getReviewByProductId =
	(productId: number, limit: number = 10, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{reviews: Review[]}> = await customAxios.get(`/api/v1/reviews/product/${productId}?limit=${limit}&offset=${offset}`);
			dispatch({
				type: GET_PRODUCT_REVIEWS,
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

export const reviewsClear = () => async (dispatch: any) => {
	dispatch({
		type: REVIEWS_CLEAR
	});
};
