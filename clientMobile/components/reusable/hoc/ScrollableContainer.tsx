import React from 'react';
import {ScrollView} from 'react-native';
import {utils} from '../../../style/fragments/utils';
const {container, my3} = utils;

interface ScrollableContainerProps {}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({children, ...props}) => {
	return (
		<ScrollView style={[container, my3]} {...props}>
			{children}
		</ScrollView>
	);
};

export default ScrollableContainer;
