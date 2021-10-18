import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../auth/Splash';
import Login from '../auth/Login';
import Register from '../auth/Register';
const Stack = createStackNavigator();

interface AuthStackProps {}

const AuthStack: React.FC<AuthStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Splash' component={Splash} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='Login' component={Login} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='Register' component={Register} options={{headerTitle: '', headerTransparent: true}} />
		</Stack.Navigator>
	);
};

export default AuthStack;
