import React, {Fragment} from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {styles} from '../../../style/App';
import {utils} from '../../../style/fragments/utils';
const {block1Background, blockItem, gridView, itemContainer, itemName, itemCode} = styles;
const {fullWidth, container, textLight} = utils;
const ProductPlaceholder = require('../../../images/product-placeholder.jpg');

interface Block1Props {}

const Block1: React.FC<Block1Props> = () => {
	return (
		<View style={{...container, flex: 1}}>
			<View style={{...fullWidth, justifyContent: 'flex-start', flex: 1}}>
				<Text style={{...textLight, fontSize: 26}}>This is Block 1</Text>
				<FlatGrid
					data={[1, 2, 3, 4]}
					itemDimension={130}
					style={gridView}
					renderItem={({item}) => (
						<View style={[itemContainer, {backgroundColor: '#fff'}]}>
							<Text style={itemName}>{item}</Text>
						</View>
					)}
				/>
			</View>
		</View>
		// <Fragment>
		// 	<FlatGrid
		// 		data={[1, 2, 3, 4]}
		// 		itemDimension={130}
		// 		style={gridView}
		// 		renderItem={({item}) => (
		// 			<View style={[itemContainer, {backgroundColor: '#fff'}]}>
		// 				<Text style={itemName}>{item}</Text>
		// 			</View>
		// 		)}
		// 	/>
		// </Fragment>
	);
};

export default Block1;
