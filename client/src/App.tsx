import 'react-datepicker/dist/react-datepicker.css';
import './App.min.css';
import {Provider} from 'react-redux';
import store from './store';
import {CookiesProvider, withCookies} from 'react-cookie';
import Routes from './components/routes/RoutesOrigin';

const App = () => {
	// @ts-ignore
	if (window.Cypress) {
		// @ts-ignore
		window.store = store;
	}
	// @ts-ignore
	console.log(window.Cypress, {store: window.store});

	return (
		<Provider store={store}>
			<CookiesProvider>
				<Routes />
			</CookiesProvider>
		</Provider>
	);
};

export default withCookies(App);
