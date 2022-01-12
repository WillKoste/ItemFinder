import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import SearchBar from '../../../Reusable/Inputs/SearchBar';
import {ProductsReducer, ReviewsReducer, UserReducer} from '../../../types/general';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import ProductPageReviewItem from './ProductPageReviewItem';

interface ProductPageReviewsProps extends RouteComponentProps<{productId: string}> {
	reviewsRed: ReviewsReducer;
	productsRed: ProductsReducer;
}

const ProductPageReviews: React.FC<ProductPageReviewsProps> = ({productsRed: {product}, reviewsRed: {reviews}}) => {
	const onSearchReviews = (e: any) => {
		e.preventDefault();
		console.log({e});
	};

	return (
		<div className='product-page-reviews'>
			<h2>Reviews for {product?.name}</h2>
			<SearchBar placeHolder='Search product reviews...' onSearch={onSearchReviews} />
			{reviews.map((rev) => (
				<ProductPageReviewItem rev={rev} />
			))}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed,
	reviewsRed: state.reviewsRed
});

export default withRouter(connect(mapStateToProps)(ProductPageReviews));
