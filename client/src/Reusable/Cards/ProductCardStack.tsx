import React, {useEffect, useState, useCallback, useMemo, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getProducts} from '../../actions/products';
import {ProductsReducer} from '../../types/general';
import Card1 from '../Card1';

interface CardStackProps {
	productsRed: ProductsReducer;
	getProducts: (limit?: number, offset?: number) => void;
	right?: string;
	left?: string;
	top?: string;
}

const CardStack: React.FC<CardStackProps> = ({productsRed: {loading, products}, getProducts, right = '-70px', top = '40%', left = '-70px'}) => {
	const [limitState, setLimitState] = useState(5);
	const [offsetState, setOffsetState] = useState(0);

	useEffect(() => {
		console.log({offsetState});
		getProducts(limitState, offsetState);
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
				<h4>Loading...</h4>
			) : products.length > 0 ? (
				<Fragment>
					<div className='cards-grid mb-4 arrows-container'>
						<button className='arrow-left' onClick={onClickLeftArrow} disabled={offsetState === 0} style={{left, top}}>
							<i className='fas fa-chevron-left'></i>
						</button>
						<button className='arrow-right' onClick={onClickRightArrow} style={{right, top}}>
							<i className='fas fa-chevron-right'></i>
						</button>
						{products.map((prod) => (
							<Link key={prod.id} to={`/product/info/${prod.id}`}>
								<Card1 data={prod} />
							</Link>
						))}
					</div>
					<div className='limit-selector-section'>
						<select name='limitSelector' className='limit-selector mb-2' onChange={(e) => setLimitState(+e.target.value)}>
							<option value={5}>5</option>
							<option value={10}>10</option>
							<option value={15}>15</option>
							<option value={20}>20</option>
						</select>
					</div>
				</Fragment>
			) : (
				<p>No products found</p>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts})(CardStack);
