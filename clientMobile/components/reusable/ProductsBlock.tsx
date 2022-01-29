import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {utils} from '../../style/fragments/utils';
import {Product} from '../../types/redux';
const {image, gridView, itemContainer, itemName, p1, p2} = utils;
const ProductPlaceholder = require('../../images/product-placeholder.jpg');

interface Block2Props {
	blockProducts: Product[];
}

const Block2: React.FC<Block2Props> = ({blockProducts}) => {
	const [products, setProducts] = useState<Product[]>(blockProducts);

	return (
		<FlatGrid
			itemDimension={130}
			data={products}
			style={[gridView]}
			scrollEnabled={false}
			spacing={8}
			renderItem={({item}) => (
				<TouchableOpacity activeOpacity={0.92} style={[itemContainer, p2]}>
					<Image
						resizeMode='contain'
						source={{
							uri: item.image
						}}
						style={image}
					/>
					<Text style={itemName}>{item.name}</Text>
				</TouchableOpacity>
			)}
		/>
	);
};

export default Block2;
