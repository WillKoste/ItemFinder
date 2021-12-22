import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {ProductsHistoryReducer, ProductsReducer} from '../../../types/general';

interface TrendPageProps extends RouteComponentProps<{productId: string}> {
	productsRed: ProductsReducer;
	productHistoryRed: ProductsHistoryReducer;
}

const TrendPage: React.FC<TrendPageProps> = ({match, productsRed, productHistoryRed}) => {
	return (
		<div>
			<h2>Trend Page</h2>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed,
	productsHistoryRed: state.productsHistoryRed
});

export default connect(mapStateToProps, {})(TrendPage);
