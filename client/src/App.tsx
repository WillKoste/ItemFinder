import './App.min.css';
import {Provider} from 'react-redux';
import store from './store';
import {CookiesProvider, withCookies} from 'react-cookie';

import Routes from './components/routes/RoutesOrigin';

const App = () => {
	return (
		<Provider store={store}>
			<CookiesProvider>
				<Routes />
			</CookiesProvider>
		</Provider>
	);
};

export default withCookies(App);
