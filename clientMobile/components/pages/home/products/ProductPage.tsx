import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {HomeParamList} from '../../../../types/paramList';

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = ({}) => {
	const route = useRoute();

	console.log({route});

	return (
		<View>
			<Text>I am the Product Page :D</Text>
		</View>
	);
};

export default ProductPage;
