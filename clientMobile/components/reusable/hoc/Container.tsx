import React from 'react';
import {ScrollView, View} from 'react-native';
import {utils} from '../../../style/fragments/utils';
const {container, my3, mx2, contentContainer} = utils;

interface ContainerProps {}

const Container: React.FC<ContainerProps> = (props) => {
	return (
		<View style={[my3, mx2, {flex: 1, backgroundColor: 'red'}]} {...props}>
			{props.children}
		</View>
	);
};

export default Container;
