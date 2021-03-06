import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import {reviewsClear} from '../../actions/reviews';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Splash from '../auth/Splash';
import Account from '../pages/account/Account';
import AddContactForm from '../pages/account/Contacts/AddContactForm';
import ContactPage from '../pages/account/Contacts/ContactPage';
import Favorites from '../pages/account/Favorites/Favorites';
import MyOrders from '../pages/account/MyOrders/MyOrders';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import Home from '../pages/home/Home';
import Locate from '../pages/locate/Locate';
import NotFound from '../pages/notFound/NotFound';
import ProductPage from '../pages/products/ProductPage';
import Reviews from '../pages/reviews/Reviews';
import Trends from '../pages/trends/Trends';
import PrivateRoute from './PrivateRoute';

interface RoutesProps extends RouteComponentProps {
	reviewsClear: () => void;
}

const Routes: React.FC<RoutesProps> = ({location, reviewsClear}) => {
	useEffect(() => {
		if (location.pathname.includes(`review`) || location.pathname.includes(`product/info`)) {
			return;
		}
		reviewsClear();
	}, [location.pathname]);

	return (
		<Switch>
			<Route exact path='/' render={() => <Splash />} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' render={() => <Register />} />
			<Route exact path='/home' render={() => <Home />} />
			<Route exact path='/cart' component={Cart} />
			<Route exact path='/reviews/:productId' component={Reviews} />
			<Route exact path='/locate/:productId' component={Locate} />
			<Route exact path='/checkout' component={Checkout} />
			<Route exact path='/product/info/:productId' component={ProductPage} />
			<PrivateRoute exact path='/account/settings' component={Account} />
			<PrivateRoute exact path='/account/favorites' component={Favorites} />
			<PrivateRoute exact path='/account/orders' component={MyOrders} />
			<PrivateRoute exact path='/contacts/:contactId' component={ContactPage} />
			<PrivateRoute exact path='/new-contact' component={AddContactForm} />
			<Route exact path='/trends' component={Trends} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default connect(null, {reviewsClear})(withRouter(Routes));
