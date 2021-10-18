import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {splashNavProps} from '../../types/navigation';

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
	const navigation = useNavigation<splashNavProps>();

	navigation.navigate('Splash');

	return (
		<View>
			<Text>Splash Page</Text>
			<Button title='Login' onPress={() => navigation.navigate('Login')} />
			<Button title='Register' onPress={() => navigation.navigate('Register')} />
		</View>
	);
};

export default Splash;
