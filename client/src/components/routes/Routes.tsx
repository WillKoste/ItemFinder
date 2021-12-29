import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Splash from '../auth/Splash';
import Navbar from '../layout/Navbar';
import Account from '../pages/account/Account';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import Trends from '../pages/trends/Trends';
import {getCurrentUser} from '../../actions/auth';
import ProductPage from '../pages/products/ProductPage';
import Cart from '../pages/cart/Cart';
import {CartReducer, Product} from '../../types/general';
import {setCartItems} from '../../actions/cartItems';

interface RoutesProps {
	getCurrentUser: () => void;
	setCartItems: (items: Product[]) => void;
	cartItemsRed: CartReducer;
}

const Routes: React.FC<RoutesProps> = ({getCurrentUser, cartItemsRed: {total}, setCartItems}) => {
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
	}, [cartItems, total]);

	return (
		<Router>
			<Router>
				<div className='app'>
					<Navbar />
					<Switch>
						<Route exact path='/' render={() => <Splash />} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' render={() => <Register />} />
						<Route exact path='/home' render={() => <Home />} />
						<Route exact path='/cart' component={Cart} />
						<Route exact path='/product/info/:productId' component={ProductPage} />
						<PrivateRoute exact path='/account' component={Account} />
						<Route exact path='/trends' component={Trends} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</Router>
	);
};

const mapStateToProps = (state: any) => ({
	cartItemsRed: state.cartItemsRed
});

export default connect(mapStateToProps, {getCurrentUser, setCartItems})(Routes);
