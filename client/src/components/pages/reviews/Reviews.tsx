import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {getReviewByProductId} from '../../../actions/reviews';
import {ReviewsReducer} from '../../../types/general';

interface ReviewsProps extends RouteComponentProps<{productId: string}> {
	reviewsRed: ReviewsReducer;
	getReviewByProductId: (productId: number) => void;
}

const Reviews: React.FC<ReviewsProps> = ({reviewsRed: {reviews}, getReviewByProductId, match}) => {
	useEffect(() => {
		getReviewByProductId(+match.params.productId);
	}, []);

	console.log({reviews});

	return (
		<div className='reviews-page'>
			<div className='container'>
				<h2>Reviews</h2>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	reviewsRed: state.reviewsRed
});

export default connect(mapStateToProps, {getReviewByProductId})(Reviews);
