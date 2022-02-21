import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, ScrollView} from 'react-native';
import {HomeStackNavProps} from '../../../../types/stackNavProps';
import {ProductsReducer} from '../../../../types/redux';
import {getProduct} from '../../../../actions/products';
import SpinnerCustom from '../../../layout/SpinnerCustom';
import {utils} from '../../../../style/fragments/utils';
import ScrollableContainer from '../../../reusable/hoc/ScrollableContainer';
import Rating from '../../../reusable/misc/Rating';
import {formatCurrency} from '../../../../utils/randomUtils';
import ProductPageTop from './ProductPageTop';
import ProductPagePurchase from './ProductPagePurchase';
const {headerMd, my3, headerLg} = utils;

interface ProductPageProps {
	productsRed: ProductsReducer;
	getProduct: (prodId: number) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({productsRed: {product, loadingProduct}, getProduct, ...props}) => {
	const {route}: HomeStackNavProps<'ProductPage'> = props as any;

	useEffect(() => {
		if (route.params) {
			getProduct(route.params?.productId);
		}
	}, [route]);

	console.log({route});

	return (
		<ScrollableContainer>
			{loadingProduct ? (
				<SpinnerCustom />
			) : (
				<Fragment>
					<ProductPageTop />
					<ProductPagePurchase />
				</Fragment>
			)}
		</ScrollableContainer>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProduct})(ProductPage);
