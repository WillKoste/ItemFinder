import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/home/Home';
import ProductPage from '../pages/home/products/ProductPage';
import {HomeParamList} from '../../types/paramList';
const Stack = createStackNavigator<HomeParamList>();

interface HomeStackProps {}

const HomeStack: React.FC<HomeStackProps> = () => {
	return (
		<Stack.Navigator initialRouteName='HomePage'>
			<Stack.Screen name='HomePage' component={Home} options={{headerTitle: '', headerTransparent: true}} />
			<Stack.Screen name='ProductPage' component={ProductPage} />
			{/* <Stack.Screen name='HomePage' component={Home} options={{headerTransparent: true, headerTitle: ''}} />
			<Stack.Screen name='ProductPage' component={ProductPage} options={{headerTransparent: true, headerTitle: ''}} /> */}
		</Stack.Navigator>
	);
};

export default HomeStack;
