import React from 'react';
import {Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Splash from '../auth/Splash';
import Account from '../pages/account/Account';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import Home from '../pages/home/Home';
import Locate from '../pages/locate/Locate';
import NotFound from '../pages/notFound/NotFound';
import ProductPage from '../pages/products/ProductPage';
import Reviews from '../pages/reviews/Reviews';
import Trends from '../pages/trends/Trends';
import PrivateRoute from './PrivateRoute';

interface HeyProps extends RouteComponentProps {}

const Hey: React.FC<HeyProps> = ({location}) => {
	console.log(location);

	return (
		<Switch>
			<Route exact path='/' render={() => <Splash />} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' render={() => <Register />} />
			<Route exact path='/home' render={() => <Home />} />
			<Route exact path='/cart' component={Cart} />
			<Route exact path='/reviews' component={Reviews} />
			<Route exact path='/locate/:productId' component={Locate} />
			<Route exact path='/checkout' component={Checkout} />
			<Route exact path='/product/info/:productId' component={ProductPage} />
			<PrivateRoute exact path='/account' component={Account} />
			<Route exact path='/trends' component={Trends} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default withRouter(Hey);
