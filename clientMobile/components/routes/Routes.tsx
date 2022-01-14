import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Store} from 'redux';
import {ProductsReducer, UserReducer} from '../../types/redux';
import Navbar from '../layout/Navbar';
import AuthStack from '../stacks/AuthStack';
import {getCurrentUser} from '../../actions/auth';
import store from '../../store';

interface RoutesProps {
	authRed: UserReducer;
	productsRed: ProductsReducer;
	getCurrentUser: () => void;
}

const Routes: React.FC<RoutesProps> = ({authRed, productsRed, getCurrentUser}) => {
	useEffect(() => {
		getCurrentUser();
	}, []);

	useEffect(() => {
		console.log({REDUX_STORE: store.getState()});
	}, [authRed, productsRed]);

	return <NavigationContainer>{authRed.loading ? <Text>Loading...</Text> : authRed.isAuthenticated ? <Navbar /> : <AuthStack />}</NavigationContainer>;
	// return <NavigationContainer>{authRed.loading ? <Text>Loading...</Text> : <Navbar />}</NavigationContainer>;
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed,
	productsRed: state.productsRed
});

export default connect(mapStateToProps, {getCurrentUser})(Routes);
