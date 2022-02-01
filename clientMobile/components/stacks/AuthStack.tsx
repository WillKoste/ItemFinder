import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../auth/Splash';
import LoginComponent from '../auth/LoginComponent';
import Register from '../auth/RegisterComponent';
import {AuthParamList} from '../../types/paramList';
const Stack = createStackNavigator<AuthParamList>();

interface AuthStackProps {}

const AuthStack: React.FC<AuthStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='SplashPage' component={Splash} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='LoginPage' component={LoginComponent} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='RegisterPage' component={Register} options={{headerTitle: '', headerTransparent: true}} />
		</Stack.Navigator>
	);
};

export default AuthStack;
