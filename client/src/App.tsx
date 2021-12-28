import './App.min.css';
import {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {CookiesProvider, withCookies} from 'react-cookie';

import Routes from './components/routes/Routes';

const App = () => {
	useEffect(() => {
		if (!localStorage.getItem('cart')) {
			localStorage.setItem('cart', JSON.stringify([]));
			return;
		} else {
			return;
		}
	});

	return (
		<Provider store={store}>
			<CookiesProvider>
				<Routes />
			</CookiesProvider>
		</Provider>
	);
};

export default withCookies(App);
