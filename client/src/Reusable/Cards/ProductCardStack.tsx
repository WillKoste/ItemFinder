import React, {useEffect, useState, useCallback, Fragment, CSSProperties} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getProducts} from '../../actions/products';
import {Product, ProductsReducer} from '../../types/general';
import {ProductsOptions} from '../../types/redux';
import Card1 from '../Card1';
import {useTransition, animated, useSpringRef, AnimatedProps, useSpring, config} from 'react-spring';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

interface CardStackProps {
	productsRed: ProductsReducer;
	getProducts: (options: ProductsOptions) => void;
	right?: string;
	left?: string;
	top?: string;
}

const CardStack: React.FC<CardStackProps> = ({productsRed: {loading, products}, getProducts, right = '-80px', top = '35%', left = '-80px'}) => {
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

	const transRef = useSpringRef();

	useEffect(() => {
		transRef.start();
	}, []);

	const transitions = useTransition(products, {
		from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
		enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
		leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
		keys: null,
		ref: transRef
	});

	const yoMama = useTransition(products, {
		from: {opacity: 0},
		enter: {opacity: 1},
		leave: {opacity: 0},
		config: config.molasses
	});

	const springProps = useSpring({width: '100%'});

	return (
		<div className='product-card-stack'>
			{loading ? (
				<h4>Loading...</h4>
			) : products.length > 0 ? (
				<Fragment>
					<TransitionGroup>
						<CSSTransition key='uh' addEndListener={(node, done) => node.addEventListener('transitionend', done, false)} classNames='fade'>
							<div className='cards-grid arrows-container'>
								<button className='arrow-left' onClick={onClickLeftArrow} disabled={offsetState === 0} style={{left, top}}>
									<i className='fas fa-chevron-left'></i>
								</button>
								<button className='arrow-right' onClick={onClickRightArrow} style={{right, top}}>
									<i className='fas fa-chevron-right'></i>
								</button>
								{/* THIS IS THE ORIGINAL */}
								{/* {products.map((prod) => (
							<div>
								<Link className='product-card-thing' key={prod.id} to={`/product/info/${prod.id}`}>
									<Card1 data={prod} />
								</Link>
							</div>
						))} */}

								{products.map((prod) => (
									<div>
										<Link className='product-card-thing' key={prod.id} to={`/product/info/${prod.id}`}>
											<Card1 data={prod} />
										</Link>
									</div>
								))}
							</div>
						</CSSTransition>
					</TransitionGroup>
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
