import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../pages/cart/Cart';
const Stack = createStackNavigator();

interface CartStackProps {}

const CartStack: React.FC<CartStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Cart' component={Cart} options={{headerTransparent: true, headerTitle: ''}} />
		</Stack.Navigator>
	);
};

export default CartStack;
