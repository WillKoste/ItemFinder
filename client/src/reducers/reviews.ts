import {GET_REVIEWS, GET_REVIEW, REVIEWS_ERROR, REVIEWS_CLEAR, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW, GET_PRODUCT_REVIEWS} from '../actions/types';
import {ReviewsReducer} from '../types/general';
import {Action} from '../types/redux';

const inititalState: ReviewsReducer = {
	reviews: [],
	review: null,
	loadingReviews: true,
	loadingReview: true,
	error: null,
	success: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload} = action;
	switch (type) {
		case GET_REVIEWS:
		case GET_PRODUCT_REVIEWS:
			return {
				...state,
				reviews: payload,
				loadingReviews: false,
				error: null,
				success: true
			};
		case GET_REVIEW:
			return {
				...state,
				review: payload,
				loadingReview: false,
				error: null,
				success: true
			};
		case REVIEWS_CLEAR:
			return {
				...state,
				loadingReviews: false,
				loadingReview: false,
				reviews: [],
				review: null,
				error: null,
				success: false
			};
		case REVIEWS_ERROR:
			return {
				...state,
				error: payload,
				loadingReviews: false,
				loadingReview: false,
				reviews: [],
				review: null,
				success: false
			};
		default:
			return state;
	}
}
