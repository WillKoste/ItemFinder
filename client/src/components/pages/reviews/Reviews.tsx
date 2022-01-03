import moment from 'moment';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {getReviewByProductId} from '../../../actions/reviews';
import {ReviewsReducer, UserReducer} from '../../../types/general';

interface ReviewsProps extends RouteComponentProps<{productId: string}> {
	reviewsRed: ReviewsReducer;
	authRed: UserReducer;
	getReviewByProductId: (productId: number) => void;
}

const Reviews: React.FC<ReviewsProps> = ({reviewsRed: {reviews}, getReviewByProductId, match, authRed: {user}}) => {
	useEffect(() => {
		getReviewByProductId(+match.params.productId);
	}, []);

	console.log({reviews});

	return (
		<div className='reviews-page'>
			<div className='container'>
				<h2>Reviews</h2>
				<div className='reviews'>
					{reviews.map((rev) => (
						<div className='review'>
							<div>
								<div className='review-title'>
									<p>
										<strong>{rev.title}</strong> <small>Created on: {moment(rev.created_at).format('l')}</small>
									</p>
								</div>
								<div className='review-body'>
									<p>{rev.body}</p>
								</div>
							</div>
							<div className='vote-btns'>
								<i className='fas fa-chevron-up selected'></i>
								<div className='rating'>{rev.rating}</div>
								<i className='fas fa-chevron-down'></i>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	reviewsRed: state.reviewsRed,
	authRed: state.authRed
});

export default connect(mapStateToProps, {getReviewByProductId})(Reviews);
