import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../pages/account/MyFavorites/MyFavorites';
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
