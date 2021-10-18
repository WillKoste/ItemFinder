import './App.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Favorites from './components/pages/favorites/Favorites';
import NotFound from './components/pages/notFound/NotFound';
import Account from './components/pages/account/Account';
import Trends from './components/pages/trends/Trends';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='app'>
					<Navbar />
					<Switch>
						<Route exact path='/' render={() => <Home />} />
						<Route exact path='/favorites' render={() => <Favorites />} />
						<Route exact path='/account' render={() => <Account />} />
						<Route exact path='/trends' render={() => <Trends />} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
