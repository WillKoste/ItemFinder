import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../../actions/products';
import Card1 from '../../../Reusable/Card1';
import {Product, ProductsHistoryReducer, ProductsReducer} from '../../../types/general';
import TrendsGraphs from './TrendsGraphs';

interface TrendsProps {
	productsHistoryRed: ProductsHistoryReducer;
	productsRed: ProductsReducer;
	getProducts: () => void;
}

const Trends: React.FC<TrendsProps> = ({productsHistoryRed, productsRed, productsRed: {loading, products}, getProducts}) => {
	const [productsData, setProductsData] = useState<Product[]>([]);
	useEffect(() => {
		getProducts();
	}, []);
	console.log({products});

	useEffect(() => {
		setProductsData(products);
	}, [products]);

	console.log({productsData});

	return (
		<div className='trends'>
			<div className='container'>
				<h1 className='mb-3'>Trends</h1>
				{loading ? (
					<h3>Loading...</h3>
				) : productsData.length > 0 ? (
					<div className='cards-grid mb-5'>
						{productsData.map((prod) => (
							<Card1 key={prod.id} data={prod} />
						))}
					</div>
				) : null}
				<TrendsGraphs productsRed={productsRed} />
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsHistoryRed: state.productsHistoryRed,
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProducts})(Trends);
