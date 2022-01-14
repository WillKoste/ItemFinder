import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../auth/Splash';
import LoginComponent from '../auth/LoginComponent';
import Register from '../auth/RegisterComponent';
const Stack = createStackNavigator();

interface AuthStackProps {}

const AuthStack: React.FC<AuthStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Splash' component={Splash} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='LoginComponent' component={LoginComponent} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='RegisterComponent' component={Register} options={{headerTitle: '', headerTransparent: true}} />
		</Stack.Navigator>
	);
};

export default AuthStack;
