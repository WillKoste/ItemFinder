import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import AccountStack from '../stacks/AccountStack';
import FavoritesStack from '../stacks/FavoritesStack';
import HomeStack from '../stacks/HomeStack';
import TrendsStack from '../stacks/TrendsStack';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarHideOnKeyboard: true,
				tabBarStyle: {},
				tabBarIcon: ({color, focused, size}) => {
					if (route.name === 'Home') {
						return <Icon name='home' color={focused ? 'purple' : color} size={size} />;
					} else if (route.name === 'Account') {
						return <Icon name='user-circle' color={focused ? 'purple' : color} size={size} />;
					} else if (route.name === 'Trends') {
						return <Icon name='chart-line' color={focused ? 'purple' : color} size={size} />;
					} else if (route.name === 'Favorites') {
						return <Icon name='heart' color={focused ? 'purple' : color} size={size} />;
					}
				}
			})}
		>
			<Tab.Screen name='Home' component={HomeStack} options={{headerShown: false, tabBarActiveTintColor: 'lime'}} />
			<Tab.Screen name='Favorites' component={FavoritesStack} options={{headerShown: false, tabBarActiveTintColor: 'lime'}} />
			<Tab.Screen name='Trends' component={TrendsStack} options={{headerShown: false, tabBarActiveTintColor: 'lime'}} />
			<Tab.Screen name='Account' component={AccountStack} options={{headerShown: false, tabBarActiveTintColor: 'lime'}} />
		</Tab.Navigator>
	);
};

export default Navbar;
