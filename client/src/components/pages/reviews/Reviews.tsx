import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getProduct} from '../../../actions/products';
import {getReviewByProductId} from '../../../actions/reviews';
import RatingStars from '../../../Reusable/Products/RatingStars';
import {ProductsReducer, ReviewsReducer, UserReducer} from '../../../types/general';
import SpinnerCustom from '../../layout/SpinnerCustom';
import ProductPageReviewItem from '../products/ProductPageReviewItem';

interface ReviewsProps extends RouteComponentProps<{productId: string}> {
	reviewsRed: ReviewsReducer;
	authRed: UserReducer;
	productsRed: ProductsReducer;
	getReviewByProductId: (productId: number, userId?: number) => void;
	getProduct: (productId: number) => void;
}

const Reviews: React.FC<ReviewsProps> = ({reviewsRed: {reviews, loadingReviews}, getReviewByProductId, match, authRed: {user}, getProduct, productsRed: {product, loadingProduct}}) => {
	useEffect(() => {
		if (user) {
			getReviewByProductId(+match.params.productId, +user.id);
		} else {
			getReviewByProductId(+match.params.productId);
		}
	}, [user]);
	useEffect(() => {
		getProduct(+match.params.productId);
	}, []);

	return (
		<div className='reviews-page'>
			{loadingProduct || loadingReviews ? (
				<Fragment>
					<SpinnerCustom />
				</Fragment>
			) : (
				<div className='container'>
					<Fragment>
						<div className='reviews-head mb-3'>
							<h2 className='mb-1'>
								Reviews:{' '}
								<Link className='text-secondary' to={`/product/info/${product?.id}`}>
									{product?.name}
								</Link>
							</h2>
							<RatingStars rating={product?.rating} />
						</div>
						<div className='reviews'>
							{reviews.map((rev) => (
								<ProductPageReviewItem rev={rev} key={rev.id} />
							))}
						</div>
					</Fragment>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	reviewsRed: state.reviewsRed,
	authRed: state.authRed,
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getReviewByProductId, getProduct})(Reviews);
