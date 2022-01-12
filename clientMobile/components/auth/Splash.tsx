import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {splashNavProps} from '../../types/navigation';
import {styles} from '../../style/App';
import {utils} from '../../style/fragments/utils';
import {useNavigation} from '@react-navigation/native';
const SplashImage = require('../../images/splash-img.jpg');
const {splashHeader, splashImage} = styles;
const {innerContainer, btnLight, outerContainer, btnTextLight, btnTextDark, btnDark, btnHighlight, btnPrimary, btnSecondary, btnDanger, btnSuccess} = utils;

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
	const navigation = useNavigation<splashNavProps>();
	navigation.navigate('Splash');

	return (
		<View style={outerContainer}>
			<ImageBackground source={SplashImage} resizeMode='cover' style={splashImage}>
				<View style={innerContainer}>
					<Text style={splashHeader}>Splash Page</Text>
					<View style={{width: '100%', paddingBottom: 100}}>
						<TouchableOpacity style={btnHighlight} activeOpacity={0.9}>
							<Text style={btnTextDark} onPress={() => navigation.navigate('Register')}>
								Register
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={btnLight} activeOpacity={0.9} onPress={() => navigation.navigate('Login')}>
							<Text style={btnTextDark}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default Splash;
