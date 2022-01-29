import React from 'react';
import {View, Text} from 'react-native';
import {utils} from '../../style/fragments/utils';
const {py2, my2, bgDark, textLight, px2, headerSm} = utils;

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
	return (
		<View style={[my2, py2, bgDark]}>
			<Text style={[textLight, px2, {fontSize: 20, marginBottom: 20, marginTop: 8}]}>This is the banner</Text>
		</View>
	);
};

export default Banner;
