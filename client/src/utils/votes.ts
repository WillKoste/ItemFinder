import {customAxios} from './customAxios';

export const voteReview = async (reviewId: number, userId: number, voteType: string) => {
	let voteTypeVal;

	if (voteType === 'upvote') {
		voteTypeVal = 1;
	} else if (voteType === 'downvote') {
		voteTypeVal = -1;
	}

	try {
		await customAxios.post(`/api/v1/reviews/${voteType}?reviewId=${reviewId}&userId=${userId}&voteTypeVal=${voteTypeVal}`);
		return;
	} catch (err) {
		console.error(err);
	}
};
