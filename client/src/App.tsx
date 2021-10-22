import './App.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from './components/routes/PrivateRoute';

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
	return (
		<Provider store={store}>
			<Router>
				<div className='app'>
					<Navbar />
					<Switch>
						<Route exact path='/' render={() => <Splash />} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' render={() => <Register />} />
						<Route exact path='/home' render={() => <Home />} />
						<Route exact path='/favorites' render={() => <Favorites />} />
						<Route exact path='/account' render={() => <Account />} />
						<PrivateRoute exact path='/trends' component={Trends} />
						{/* <Route exact path='/trends' component={Trends} /> */}
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
