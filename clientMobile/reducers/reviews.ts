import {GET_REVIEWS, GET_REVIEW, REVIEWS_ERROR, REVIEWS_CLEAR, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW, GET_PRODUCT_REVIEWS, UPDATE_VOTE} from '../actions/types';
import {Action, ReviewsReducer} from '../types/redux';
import store from '../store';

const inititalState: ReviewsReducer = {
	reviews: [],
	review: null,
	loadingReviews: true,
	loadingReview: true,
	error: null,
	success: null
};

export default function (state = inititalState, action: Action) {
	const {type, payload, revId, newRating, voteTypeVal} = action;
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
		case UPDATE_VOTE:
			const desiredReview = state.reviews.find((z) => z.id === revId);
			const updatedReviews = state.reviews.map((t) => ({
				...t,
				rating: desiredReview && t.id === +desiredReview.id ? newRating : t.rating,
				vote_type: desiredReview && t.id === +desiredReview.id ? voteTypeVal : t.vote_type
			}));
			console.log({updatedReviews});
			console.log({desiredReview, newRating, revId});

			return {
				...state,
				reviews: updatedReviews
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
