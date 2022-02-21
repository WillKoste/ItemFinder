import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Image} from 'react-native';
import {formatCurrency} from '../../../../utils/randomUtils';
import Rating from '../../../reusable/misc/Rating';
import {utils} from '../../../../style/fragments/utils';
import {ProductsReducer} from '../../../../types/redux';
const {my3, headerLg, headerMd} = utils;

interface ProductPageTopProps {
	productsRed: ProductsReducer;
}

const ProductPageTop: React.FC<ProductPageTopProps> = ({productsRed: {product}}) => {
	return (
		<View>
			<Text style={[headerMd]}>{product?.name}</Text>
			<Rating rating={product?.rating} />
			<View style={[my3, {backgroundColor: 'red'}]}>
				<Image
					source={{
						uri: product?.image
					}}
					resizeMethod='scale'
					resizeMode='cover'
					style={[{width: '100%', height: 270}]}
				/>
			</View>
			<Text style={[headerLg, {color: '#333'}]}>{formatCurrency(product?.price)}</Text>
		</View>
	);
};

const mapStateToProps = (state: any) => ({
	productsRed: state.productsRed
});
export default connect(mapStateToProps)(ProductPageTop);
