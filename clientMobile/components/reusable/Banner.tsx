import React from 'react';
import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import {utils} from '../../style/fragments/utils';
const {py3, my2, textLight, px2, mx2, headerMd, btnHighlight, btnTextDark} = utils;
const BannerImage = require('../../images/banner-image-1.jpg');

interface BannerProps {
	btnText?: string;
}

const Banner: React.FC<BannerProps> = ({btnText = 'Learn More'}) => {
	return (
		<ImageBackground source={BannerImage} style={[my2, py3, {justifyContent: 'space-between'}]}>
			<Text style={[textLight, px2, headerMd]}>Checkout the new watches!</Text>
			<Text style={[textLight, mx2, {marginBottom: 15}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos alias inventore quae deserunt nesciunt?</Text>
			<TouchableOpacity activeOpacity={0.91} style={[btnHighlight, mx2, {width: '50%', alignSelf: 'center'}]}>
				<Text style={[btnTextDark]}>{btnText}</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
};

export default Banner;
