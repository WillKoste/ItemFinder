import {useEffect} from 'react';
import './App.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from './components/routes/PrivateRoute';
import {useCookies, CookiesProvider, withCookies} from 'react-cookie';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Favorites from './components/pages/favorites/Favorites';
import NotFound from './components/pages/notFound/NotFound';
import Account from './components/pages/account/Account';
import Trends from './components/pages/trends/Trends';
import Splash from './components/auth/Splash';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
	const [cookies, setCookies] = useCookies();

	useEffect(() => {
		// setCookies('peepeepoopoo', 'you dum 4 real', {path: '/'});

		console.log({cookies});
	}, []);

	return (
		<Provider store={store}>
			<CookiesProvider>
				<Router>
					<div className='app'>
						<Navbar />
						<Switch>
							<Route exact path='/' render={() => <Splash />} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/register' render={() => <Register />} />
							<Route exact path='/home' render={() => <Home />} />
							<Route exact path='/favorites' render={() => <Favorites />} />
							<PrivateRoute exact path='/account' component={Account} />
							<Route exact path='/trends' component={Trends} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</Router>
			</CookiesProvider>
		</Provider>
	);
};

export default withCookies(App);
