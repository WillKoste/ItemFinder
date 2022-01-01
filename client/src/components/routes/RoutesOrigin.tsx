import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getCurrentUser} from '../../actions/auth';
import {CartReducer, Product} from '../../types/general';
import {setCartItems} from '../../actions/cartItems';
import Hey from './Routes';

interface RoutesProps {
	getCurrentUser: () => void;
	setCartItems: (items: Product[]) => void;
	cartItemsRed: CartReducer;
}

const Routes: React.FC<RoutesProps> = ({getCurrentUser, cartItemsRed, setCartItems}) => {
	const cartItems = localStorage.getItem('cart');
	useEffect(() => {
		getCurrentUser();
	}, []);

	useEffect(() => {
		if (cartItems) {
			const parsedItems: Product[] = JSON.parse(cartItems);
			if (parsedItems.length > 0) {
				setCartItems(parsedItems);
			}
		} else {
			localStorage.setItem('cart', JSON.stringify([]));
		}
	}, [cartItems]);

	return (
		<Router>
			<div className='app'>
				<Navbar />
				<Hey />
			</div>
		</Router>
	);
};

const mapStateToProps = (state: any) => ({
	cartItemsRed: state.cartItemsRed
});

export default connect(mapStateToProps, {getCurrentUser, setCartItems})(Routes);
