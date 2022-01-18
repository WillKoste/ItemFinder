import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Review, UserReducer} from '../../../types/general';
import {connect} from 'react-redux';
import {voteReview} from '../../../actions/reviews';

interface ProductPageReviewItemProps {
	rev: Review;
	authRed: UserReducer;
	voteReview: (reviewId: number, userId: number, voteType: string) => void;
}

const ProductPageReviewItem: React.FC<ProductPageReviewItemProps> = ({rev, authRed: {user}, voteReview}) => {
	const [voteReload, setVoteReload] = useState(false);
	const [selectedDown, setSelectedDown] = useState('');

	useEffect(() => {
		if (voteReload) {
			console.log(rev.vote_type);
			setVoteReload(false);
		}
	}, [voteReload]);

	return (
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
				<i
					className={`fas fa-chevron-up ${rev.vote_type === 1 ? 'selected' : ''}`}
					onClick={() => {
						if (user) {
							voteReview(rev.id, user.id, 'upvote');
							setVoteReload(true);
						}
					}}
				></i>
				<div className={`rating ${rev.rating < 0 ? 'rating-negative' : rev.rating > 0 ? 'rating-positive' : ''}`}>{rev.rating}</div>
				<i
					className={`fas fa-chevron-down ${rev.vote_type === -1 ? 'selected' : ''}`}
					onClick={() => {
						if (user) {
							voteReview(rev.id, user.id, 'downvote');
							setVoteReload(true);
						}
					}}
				></i>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {voteReview})(ProductPageReviewItem);
