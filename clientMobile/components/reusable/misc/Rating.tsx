import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {highlightColor} from '../../../style/fragments/config';
import {utils} from '../../../style/fragments/utils';

interface RatingProps {
	rating?: number;
}

const Rating: React.FC<RatingProps> = ({rating = 0}) => {
	return (
		<View style={[{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}]}>
			{rating < 0.25 ? null : rating >= 0.25 && rating < 0.75 ? <Icon name='star-half' solid color={highlightColor} /> : rating >= 0.75 ? <Icon name='star' solid color={highlightColor} /> : ''}
			{rating < 1.25 ? null : rating >= 1.25 && rating < 1.75 ? <Icon name='star-half' solid color={highlightColor} /> : rating >= 1.75 ? <Icon name='star' solid color={highlightColor} /> : ''}
			{rating < 2.25 ? null : rating >= 2.25 && rating < 2.75 ? <Icon name='star-half' solid color={highlightColor} /> : rating >= 2.75 ? <Icon name='star' solid color={highlightColor} /> : ''}
			{rating < 3.25 ? null : rating >= 3.25 && rating < 3.75 ? <Icon name='star-half' solid color={highlightColor} /> : rating >= 3.75 ? <Icon name='star' solid color={highlightColor} /> : ''}
			{rating < 4.25 ? null : rating >= 4.25 && rating < 4.75 ? <Icon name='star-half' solid color={highlightColor} /> : rating >= 4.75 ? <Icon name='star' solid color={highlightColor} /> : ''}
			<Text style={[{marginLeft: 4, fontWeight: 'bold'}]}>85</Text>
		</View>
	);
};

export default Rating;
