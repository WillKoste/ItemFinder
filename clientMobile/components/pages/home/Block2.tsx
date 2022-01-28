import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {styles} from '../../../style/App';
import {utils} from '../../../style/fragments/utils';
const {image, gridView, itemContainer, itemCode, itemName} = utils;
const ProductPlaceholder = require('../../../images/product-placeholder.jpg');

interface Block2Props {}

const Block2: React.FC<Block2Props> = () => {
	const [items, setItems] = React.useState([
		{name: 'TURQUOISE', code: '#1abc9c'},
		{name: 'EMERALD', code: '#2ecc71'},
		{name: 'PETER RIVER', code: '#3498db'},
		{name: 'AMETHYST', code: '#9b59b6'}
	]);

	return (
		<FlatGrid
			itemDimension={130}
			data={items}
			style={{...gridView}}
			scrollEnabled={false}
			spacing={10}
			renderItem={({item}) => (
				<TouchableOpacity activeOpacity={0.92} style={[itemContainer, {backgroundColor: item.code}]}>
					<Image source={ProductPlaceholder} style={image} />
				</TouchableOpacity>
			)}
		/>
	);
};

export default Block2;
