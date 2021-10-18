import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/home/Home';
const Stack = createStackNavigator();

interface HomeStackProps {}

const HomeStack: React.FC<HomeStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} options={{headerTransparent: true, headerTitle: ''}} />
		</Stack.Navigator>
	);
};

export default HomeStack;
