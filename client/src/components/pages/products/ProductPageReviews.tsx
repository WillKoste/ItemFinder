import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import SearchBar from '../../../Reusable/Inputs/SearchBar';
import {ProductsReducer, ReviewsReducer} from '../../../types/general';

interface ProductPageReviewsProps {
	reviewsRed: ReviewsReducer;
	productsRed: ProductsReducer;
}

const ProductPageReviews: React.FC<ProductPageReviewsProps> = ({productsRed: {product}, reviewsRed: {reviews}}) => {
	return (
		<div className='product-page-reviews'>
			<h2>Reviews for {product?.name}</h2>
			<SearchBar placeHolder='Search product reviews...' />
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
						<i className={`fas fa-chevron-up selected`}></i>
						<div className={`rating ${rev.rating < 0 ? 'rating-negative' : rev.rating > 0 ? 'rating-positive' : ''}`}>{rev.rating}</div>
						<i className={`fas fa-chevron-down`}></i>
					</div>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed,
	reviewsRed: state.reviewsRed
});

export default connect(mapStateToProps)(ProductPageReviews);
