import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from '../../style/App';
import {utils} from '../../style/fragments/utils';
import {useNavigation} from '@react-navigation/native';
const SplashImage = require('../../images/splash-img.jpg');
const {splashHeader, splashImage} = styles;
const {fullWidth, btnLight, btnTextDark, btnHighlight} = utils;

interface SplashProps {}

const Splash = ({}) => {
	const {navigate} = useNavigation();

	return (
		<View>
			<ImageBackground source={SplashImage} resizeMode='cover' style={splashImage}>
				<View style={fullWidth}>
					<Text style={splashHeader}>ItemFinder</Text>
					<View style={{width: '100%', paddingBottom: 100}}>
						<TouchableOpacity style={btnHighlight} activeOpacity={0.9} onPress={() => navigate('RegisterPage')}>
							<Text style={btnTextDark}>Register</Text>
						</TouchableOpacity>
						<TouchableOpacity style={btnLight} activeOpacity={0.9} onPress={() => navigate('LoginPage')}>
							<Text style={btnTextDark}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default Splash;
