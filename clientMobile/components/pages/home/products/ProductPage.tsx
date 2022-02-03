import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {HomeStackNavProps} from '../../../../types/stackNavProps';
import {ProductsReducer} from '../../../../types/redux';
import {getProduct} from '../../../../actions/products';
import SpinnerCustom from '../../../layout/SpinnerCustom';
import {utils} from '../../../../style/fragments/utils';
import ScrollableContainer from '../../../reusable/hoc/ScrollableContainer';
const {container, my3} = utils;

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
			<Text>I am the Product Page :D</Text>
			{loadingProduct ? (
				<SpinnerCustom />
			) : (
				<View>
					<Text>{product?.name}</Text>
				</View>
			)}
		</ScrollableContainer>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getProduct})(ProductPage);
