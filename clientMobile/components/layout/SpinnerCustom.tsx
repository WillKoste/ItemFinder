import React from 'react';
import {View, Text, StatusBar, ActivityIndicator} from 'react-native';

interface SpinnerCustomProps {}

const SpinnerCustom: React.FC<SpinnerCustomProps> = () => {
	return (
		<View>
			<ActivityIndicator size={'large'} style={{marginTop: '70%'}} />
		</View>
	);
};

export default SpinnerCustom;
