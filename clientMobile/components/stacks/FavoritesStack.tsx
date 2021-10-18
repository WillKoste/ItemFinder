import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../pages/favorites/Favorites';
const Stack = createStackNavigator();

interface FavoritesStackProps {}

const FavoritesStack: React.FC<FavoritesStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Favorites' component={Favorites} options={{headerTransparent: true, headerTitle: ''}} />
		</Stack.Navigator>
	);
};

export default FavoritesStack;
