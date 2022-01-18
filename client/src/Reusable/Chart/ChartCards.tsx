import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../actions/products';
import {Product, ProductsReducer} from '../../types/general';
import {ProductsOptions} from '../../types/redux';
import {formatCurrency} from '../../utils/randomUtils';
import InfiniteScroll from 'react-infinite-scroller';

interface ChartCardsProps {
	category?: string;
	getProducts: (options: ProductsOptions) => void;
	productsRed: ProductsReducer;
}

const ChartCards: React.FC<ChartCardsProps> = ({getProducts, productsRed: {products, loading}, category}) => {
	const [limitStep, setLimitStep] = useState(10);
	const [bottomReload, setBottomReload] = useState(false);
	const [productsSpread, setProductsSpread] = useState([products]);

	useEffect(() => {
		getProducts({limit: limitStep, offset: 0});
	}, []);

	const loadMore = () => {
		getProducts({limit: 10, offset: 10});
		// setLimitStep(limitStep + 10);
		setBottomReload(false);
	};

	return (
		<div className='chart-products-container'>
			<div
				className='chart-products'
				onScroll={(e: any) => {
					if (e.target.scrollTop === e.target.clientHeight) {
						console.log('Cool man');
						getProducts({limit: 20});
					} else {
						if (bottomReload) {
							setBottomReload(false);
						} else {
							return;
						}
					}
					// console.log({yo: e.target});
					// if (isBottom(e)) {
					// 	setLimitStep(limitStep + 5);
					// 	setBottomReload(true);
					// }
				}}
			>
				{loading ? (
					<h3>Loading...</h3>
				) : products.length > 0 ? (
					products.map((prod) => (
						<div key={prod.id} className='chart-product'>
							<img src={prod.image} alt={prod.image} />
							<div>
								<p>{prod.name}</p>
								<p>{formatCurrency(prod.price)}</p>
							</div>
						</div>
					))
				) : null}
			</div>
			<div className='chart-buttons'>
				<button>
					<i className='fas fa-arrow-left'></i>
				</button>
				<button>
					<i className='fas fa-arrow-right'></i>
				</button>
			</div>
		</div>
	);

	// return (
	// 	<div className='chart-products-container'>
	// 		<InfiniteScroll
	// 			hasMore={bottomReload}
	// 			// onScroll={(e: any) => {
	// 			// 	console.log(e.target);
	// 			// 	if (e.target.scrollTop === e.target.clientHeight - 1) {
	// 			// 		console.log('cool');
	// 			// 	} else {
	// 			// 		if (bottomReload) {
	// 			// 			setBottomReload(false);
	// 			// 		} else {
	// 			// 			return;
	// 			// 		}
	// 			// 	}
	// 			// }}
	// 			threshold={75}
	// 			loader={<div key={0}>Loading more...</div>}
	// 			onScroll={(e: any) => {
	// 				console.log({e: e.target.clientHeight, BB: e.target.scrollTop});
	// 				if (e.target.clientHeight === e.target.scrollTop) {
	// 					console.log('fuck');
	// 					setBottomReload(true);
	// 				}
	// 			}}
	// 			className='chart-products'
	// 			initialLoad={true}
	// 			loadMore={loadMore}
	// 		>
	// 			{loading ? (
	// 				<h3>Loading...</h3>
	// 			) : products.length > 0 ? (
	// 				products.map((prod) => (
	// 					<div key={prod.id} className='chart-product'>
	// 						<img src={prod.image} alt={prod.image} />
	// 						<div>
	// 							<p>{prod.name}</p>
	// 							<p>{formatCurrency(prod.price)}</p>
	// 						</div>
	// 					</div>
	// 				))
	// 			) : null}
	// 		</InfiniteScroll>
	// 	</div>
	// );
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts})(ChartCards);
