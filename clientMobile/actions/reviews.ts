import {AxiosResponse} from 'axios';
import {Review} from '../types/redux';
import customAxios from '../utils/customAxios';
import {GET_REVIEWS, GET_REVIEW, REVIEWS_CLEAR, REVIEWS_ERROR, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW, GET_PRODUCT_REVIEWS, UPDATE_VOTE} from './types';

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
	(productId: number, userId: number = 0, limit: number = 10, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{reviews: Review[]}> = await customAxios.get(`/api/v1/reviews/product/${productId}?limit=${limit}&offset=${offset}&usId=${userId}`);
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

export const voteReview = (reviewId: number, userId: number, voteType: string) => async (dispatch: any) => {
	let voteTypeVal;

	if (voteType === 'upvote') {
		voteTypeVal = 1;
	} else if (voteType === 'downvote') {
		voteTypeVal = -1;
	} else if (voteType === 'null') {
		voteTypeVal = 0;
		dispatch({
			type: UPDATE_VOTE,
			revId: reviewId,
			voteTypeVal: null
		});
		return;
	}
	try {
		const res: AxiosResponse<{newRating: number}> = await customAxios.post(`/api/v1/reviews/${voteType}?reviewId=${reviewId}&userId=${userId}&voteTypeVal=${voteTypeVal}`);
		dispatch({
			type: UPDATE_VOTE,
			payload: res.data,
			revId: reviewId,
			newRating: res.data.newRating,
			voteTypeVal
		});
	} catch (err) {
		console.error(err);
	}
};
