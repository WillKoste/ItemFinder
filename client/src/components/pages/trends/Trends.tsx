import React from 'react';
import {connect} from 'react-redux';
import {clearProduct, getProducts} from '../../../actions/products';
import CategoryCardStack from '../../../Reusable/Cards/CategoryCardStack';
import ChartSection from '../../../Reusable/Chart/ChartSection';
import {ProductsHistoryReducer, ProductsReducer} from '../../../types/general';
import {ProductsOptions} from '../../../types/redux';

interface TrendsProps {
	productsHistoryRed: ProductsHistoryReducer;
	productsRed: ProductsReducer;
	getProducts: (options: ProductsOptions) => void;
	clearProduct: () => void;
}

const Trends: React.FC<TrendsProps> = ({productsHistoryRed, productsRed, productsRed: {loading, products, product}, getProducts, clearProduct}) => {
	return (
		<div className='trends'>
			<div className='container'>
				<h1 className='mb-3'>Choose a Category</h1>
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
