import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Trends from '../pages/trends/Trends';
const Stack = createStackNavigator();

interface TrendsStackProps {}

const TrendsStack: React.FC<TrendsStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Trends' component={Trends} options={{headerTransparent: true, headerTitle: ''}} />
		</Stack.Navigator>
	);
};

export default TrendsStack;
