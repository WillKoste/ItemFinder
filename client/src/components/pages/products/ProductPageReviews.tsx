import React from 'react';
import {connect} from 'react-redux';
import SearchBar from '../../../Reusable/Inputs/SearchBar';
import {ProductsReducer, Review, ReviewsReducer} from '../../../types/general';

interface ProductPageReviewsProps {
	reviewsRed: ReviewsReducer;
	productsRed: ProductsReducer;
}

const ProductPageReviews: React.FC<ProductPageReviewsProps> = ({productsRed: {product}, reviewsRed: {reviews}}) => {
	return (
		<div className='product-page-reviews'>
			<h2>Reviews for {product?.name}</h2>
			<SearchBar placeHolder='Search product reviews...' />
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed,
	reviewsRed: state.reviewsRed
});

export default connect(mapStateToProps)(ProductPageReviews);
