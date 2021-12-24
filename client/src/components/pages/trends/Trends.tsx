import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {clearProduct, getProducts} from '../../../actions/products';
import CategoryCardStack from '../../../Reusable/Cards/CategoryCardStack';
import CardStack from '../../../Reusable/Cards/ProductCardStack';
import ChartSection from '../../../Reusable/Chart/ChartSection';
import {Product, ProductsHistoryReducer, ProductsReducer} from '../../../types/general';

interface TrendsProps {
	productsHistoryRed: ProductsHistoryReducer;
	productsRed: ProductsReducer;
	getProducts: () => void;
	clearProduct: () => void;
}

const Trends: React.FC<TrendsProps> = ({productsHistoryRed, productsRed, productsRed: {loading, products, product}, getProducts, clearProduct}) => {
	return (
		<div className='trends'>
			<div className='container'>
				<h1 className='mb-3'>Choose a Category</h1>
				{/* <CardStack /> */}
				<CategoryCardStack />
				<ChartSection />
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsHistoryRed: state.productsHistoryRed,
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts, clearProduct})(Trends);
