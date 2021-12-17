import {GET_REVIEWS, GET_REVIEW, REVIEWS_ERROR, REVIEWS_CLEAR, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW} from '../actions/types';
import {ReviewsReducer} from '../types/general';
import {Action} from '../types/redux';

const inititalState: ReviewsReducer = {
	reviews: [],
	review: null,
	loadingReviews: true,
	loadingReview: true,
	error: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload} = action;
	switch (type) {
		case GET_REVIEWS:
			return {
				...state,
				reviews: payload,
				loadingReviews: false,
				error: null
			};
		case GET_REVIEW:
			return {
				...state,
				review: payload,
				loadingReview: false,
				error: null
			};
		case REVIEWS_ERROR:
			return {
				...state,
				error: payload,
				loadingReviews: false,
				loadingReview: false,
				reviews: [],
				review: null
			};
		default:
			return state;
	}
}
