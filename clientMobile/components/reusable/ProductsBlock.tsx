import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {utils} from '../../style/fragments/utils';
import {Product} from '../../types/redux';
import {HomeStackNavProps} from '../../types/stackNavProps';
const {image, gridView, itemContainer, itemName, p1, p2} = utils;

interface Block2Props {
	blockProducts: Product[];
	navigation?: any;
}

const Block2: React.FC<Block2Props> = ({blockProducts, navigation}) => {
	const [products, setProducts] = useState<Product[]>(blockProducts);

	return (
		<FlatGrid
			itemDimension={130}
			data={products}
			style={[gridView]}
			scrollEnabled={false}
			spacing={8}
			renderItem={({item}) => (
				<TouchableOpacity
					activeOpacity={0.92}
					style={[itemContainer, p2]}
					onPress={() => {
						navigation.navigate('ProductPage');
					}}
				>
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
