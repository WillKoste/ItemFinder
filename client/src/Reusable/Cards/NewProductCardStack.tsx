import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getProducts} from '../../actions/products';
import {Product, ProductsReducer} from '../../types/general';
import {ProductsOptions} from '../../types/redux';
import Card1 from '../Card1';
import SpinnerCustom from '../../components/layout/SpinnerCustom';

interface NewProductCardStackProps {
	productsRed: ProductsReducer;
	getProducts: (options: ProductsOptions) => void;
	right?: string;
	left?: string;
	top?: string;
}

const NewProductCardStack: React.FC<NewProductCardStackProps> = ({productsRed: {loading, products}, getProducts}) => {
	const [limitState, setLimitState] = useState(5);
	const [offsetState, setOffsetState] = useState(0);

	useEffect(() => {
		getProducts({limit: 5, offset: offsetState});
	}, [limitState, offsetState]);

	const onClickLeftArrow = useCallback(() => {
		setOffsetState((cur) => cur - 3);
	}, []);

	const onClickRightArrow = useCallback(() => {
		setOffsetState((cur) => cur + 3);
	}, []);

	return (
		<div>
			{loading ? (
				<SpinnerCustom />
			) : products.length > 0 ? (
				<div className='product-stack-container'>
					<button className='arrow-left' onClick={onClickLeftArrow} disabled={offsetState === 0}>
						<i className='fas fa-chevron-left'></i>
					</button>
					<div className='cards-grid'>
						{products.map((prod) => (
							<Link key={prod.id} className='product-card-thing' to={`/product/info/${prod.id}`}>
								<Card1 data={prod} />
							</Link>
						))}
					</div>

					<button className='arrow-right' onClick={onClickRightArrow}>
						<i className='fas fa-chevron-right'></i>
					</button>
				</div>
			) : (
				<p>No products found</p>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts})(NewProductCardStack);
